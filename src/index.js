import "./styles/index.css";
import { createCard, deleteCard, likeCard } from "./components/card";
import { openModal, closeModal } from "./components/modal";
import { enableValidation, clearValidation } from "./components/validation.js";
import {
  getUserInfo,
  newInitialCards,
  patchUserInfo,
  addCard,
  сhangeAvatar,
} from "./components/api.js";

const content = document.querySelector(".content");
const placesList = content.querySelector(".places__list");
const popupList = document.querySelectorAll(".popup");
const closeButtons = document.querySelectorAll(".popup__close");
const popupImage = document.querySelector(".popup__image");
const popupContent = document.querySelector(".popup_type_image");
const popapCaption = document.querySelector(".popup__caption");
//Попап профиля
const profileEditButton = document.querySelector(".profile__edit-button");
const popupTypeEdit = document.querySelector(".popup_type_edit");
const formElementProfile = document.forms["edit-profile"];
const nameInput = formElementProfile.querySelector(".popup__input_type_name");
const jobInput = formElementProfile.querySelector(
  ".popup__input_type_description"
);
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileImage = document.querySelector(".profile__image");
//Попап создания карточки
const profileAddButton = document.querySelector(".profile__add-button");
const popupNewCard = document.querySelector(".popup_type_new-card");
const formElementNewPlace = document.forms["new-place"];
const placeNameCard = formElementNewPlace.querySelector(
  ".popup__input_type_card-name"
);
const linkCard = formElementNewPlace.querySelector(".popup__input_type_url");
//Переменные с попапом аватар
const popupAvatar = document.querySelector(".popup_type_avatar_edit");
const editAvatarButton = document.querySelector(".profile__avatar-button");
const formEditAvatar = document.forms["edit-avatar"];
const avatarInput = formEditAvatar["avatar"];

// Открытие модальных окон по клику
profileEditButton.addEventListener("click", () => {
  openModal(popupTypeEdit);
  clearValidation(formElementProfile, validationConfig);
  fillUserData();
});

profileAddButton.addEventListener("click", () => {
  openModal(popupNewCard);
  clearValidation(formElementNewPlace, validationConfig);
});

//Закрытие модальных окон крестиком
closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closeModal(popup));
});

// Закрытие модального окна по оверлей
popupList.forEach((item) => {
  item.addEventListener("mousedown", (evt) => {
    if (evt.currentTarget === evt.target) {
      closeModal(item);
    }
  });
});

//
function fillUserData() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
}

//открытие картинки
function openImageClick(cardImage) {
  openModal(popupContent);

  popupImage.src = cardImage.link;
  popupImage.alt = cardImage.name;
  popapCaption.textContent = cardImage.name;
}

//Смена данных пользователя
function profileFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(true);

  patchUserInfo({
    name: nameInput.value,
    about: jobInput.value,
  })
    .then((nameInput) => {
      profileTitle.textContent = nameInput.name;
      profileDescription.textContent = nameInput.about;
      renderLoading(false);
      closeModal(popupTypeEdit);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false);
    });
}

formElementProfile.addEventListener("submit", profileFormSubmit);

//Добавление карточки
function addNewCard(evt) {
  evt.preventDefault();
  renderLoading(true);

  addCard({
    name: placeNameCard.value,
    link: linkCard.value,
  })
    .then((result) => {
      placesList.prepend(
        createCard(
          result,
          deleteCard,
          likeCard,
          openImageClick,
          result.owner._id
        )
      );
      formElementNewPlace.reset();
      renderLoading(false);
      closeModal(popupNewCard);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false);
    });
}

formElementNewPlace.addEventListener("submit", addNewCard);

//Вывести карточки на страницу
getUserInfo()
  .then((user) => {
    profileTitle.textContent = user.name;
    profileDescription.textContent = user.about;
    profileImage.style = `background-image: url('${user.avatar}')`;
  })
  .catch((err) => {
    console.log(err);
  });

function displayUserCard() {
  Promise.all([getUserInfo(), newInitialCards()])
    .then(([userData, cards]) => {
      const userId = userData._id;
      cards.forEach((card) => {
        placesList.append(
          createCard(card, deleteCard, likeCard, openImageClick, userId)
        );
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
displayUserCard();

// Валидация форм
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: ".form__input-error_active",
  errorClass: ".form__input_type_error",
};

enableValidation(validationConfig);

//Смена аватара
editAvatarButton.addEventListener("click", function () {
  openModal(popupAvatar);
  avatarInput.value = "";
  clearValidation(formEditAvatar, validationConfig);
});

formEditAvatar.addEventListener("submit", function (evt) {
  evt.preventDefault();
  renderLoading(true);
  сhangeAvatar(avatarInput.value)
    .then((userData) => {
      profileImage.style = `background-image: url('${userData.avatar}')`;
      renderLoading(false);
      closeModal(popupAvatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false);
    });
});

//Функция ожидания сохранения
function renderLoading(isLoading) {
  const activePopup = document.querySelector(".popup_is-opened");
  if (activePopup) {
    const activeButton = activePopup.querySelector(".popup__button");
    if (isLoading) {
      activeButton.textContent = "Сохранение...";
    } else {
      activeButton.textContent = "Сохранить";
    }
  }
}

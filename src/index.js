import { initialCards } from "./scripts/cards";
import "./styles/index.css";
import {
  createCard,
  deleteCard,
  placesList,
  likeCard,
} from "./components/card";
import { openModal, closeModal } from "./components/modal";

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
//Попап создания карточки
const profileAddButton = document.querySelector(".profile__add-button");
const popupNewCard = document.querySelector(".popup_type_new-card");
const formElementNewPlace = document.forms["new-place"];
const placeNameCard = formElementNewPlace.querySelector(
  ".popup__input_type_card-name"
);
const linkCard = formElementNewPlace.querySelector(".popup__input_type_url");

// Открытие модальных окон по клику
profileEditButton.addEventListener("click", () => {
  openModal(popupTypeEdit);
  saveProfileInputs();
});

profileAddButton.addEventListener("click", () => {
  openModal(popupNewCard);
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

//открытие картинки
function openImageClick(cardImage) {
  openModal(popupContent);

  popupImage.src = cardImage.link;
  popupImage.alt = cardImage.name;
  popapCaption.textContent = cardImage.name;
}

// обновление данных пользователя
function profileFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;

  closeModal(popupTypeEdit);
}

// Функция добавления стартовых значений в инпут поля
function saveProfileInputs() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
}

formElementProfile.addEventListener("submit", profileFormSubmit);

//Добавление карточки
function addNewCard(evt) {
  evt.preventDefault();

  const addCard = {
    name: placeNameCard.value,
    link: linkCard.value,
  };
  const result = createCard(addCard, deleteCard, likeCard, openImageClick);
  placesList.prepend(result);

  closeModal(popupNewCard);
}

formElementNewPlace.addEventListener("submit", addNewCard);

// @todo: Вывести карточки на страницу
function renderCards() {
  for (let i = 0; i < initialCards.length; i++) {
    const result = createCard(
      initialCards[i],
      deleteCard,
      likeCard,
      openImageClick
    );
    placesList.append(result);
  }
}
renderCards();

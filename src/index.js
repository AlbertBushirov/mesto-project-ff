import "./styles/index.css";
import {
  renderCards,
  createCard,
  deleteCard,
  placesList,
  likeCard,
  openImageClick,
} from "./components/card";
import { openModal, closeModal } from "./components/modal";

renderCards();

const popup = document.querySelectorAll(".popup");
const closeButtons = document.querySelectorAll(".popup__close");
//Попап профиля
const profileEditButton = document.querySelector(".profile__edit-button");
const popupTEdit = document.querySelector(".popup_type_edit");
const formElement = document.forms["edit-profile"];
const nameInput = formElement.querySelector(".popup__input_type_name");
const jobInput = formElement.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const popupButton = document.querySelector(".popup__button");
//Попап создания карточки
const profileAddButton = document.querySelector(".profile__add-button");
const popupTNCard = document.querySelector(".popup_type_new-card");
const formElementNPlace = document.forms["new-place"];
const placeNameCard = formElementNPlace.querySelector(
  ".popup__input_type_card-name"
);
const LinkCard = formElementNPlace.querySelector(".popup__input_type_url");
//Переменные картинки
const cardImage = document.querySelectorAll(".card__image");
const popupContent = document.querySelector(".popup_type_image");
// Открытие модальных окон по клику
profileEditButton.addEventListener("click", () => {
  openModal(popupTEdit);
});

profileAddButton.addEventListener("click", () => {
  openModal(popupTNCard);
});

//Закрытие модальных окон крестиком
closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closeModal(popup));
});

// Закрытие модального окна по оверлей
popup.forEach((item) => {
  item.addEventListener("click", (evt) => {
    if (evt.currentTarget === evt.target) {
      closeModal(item);
    }
  });
});

// обновление данных пользователя
function handleFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
}
popupButton.addEventListener("click", () => {
  closeModal(popupTEdit);
});

formElement.addEventListener("submit", handleFormSubmit);

//Добавление карточки
function addNewCard(evt) {
  evt.preventDefault();

  const addCard = {
    name: placeNameCard.value,
    link: LinkCard.value,
  };
  const result = createCard(addCard, deleteCard, likeCard, openImageClick);
  placesList.prepend(result);
}

formElementNPlace.addEventListener("submit", addNewCard);

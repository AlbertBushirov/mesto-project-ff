import { initialCards } from "../scripts/cards";
import { openModal } from "./modal";
// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// @todo: DOM узлы
const content = document.querySelector(".content");
export const placesList = content.querySelector(".places__list");
const popupImage = document.querySelector(".popup__image");
const popupContent = document.querySelector(".popup_type_image");
const popapCaption = document.querySelector(".popup__caption");

// @todo: Функция создания карточки
export function createCard(initialCards, onDelete, onLike, openImage) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const resetButton = cardElement.querySelector(".card__delete-button");
  const cardLike = cardElement.querySelector(".card__like-button");
  const cardImage = cardElement.querySelector(".card__image");

  cardElement.querySelector(".card__title").textContent = initialCards.name;
  cardElement.querySelector(".card__image").src = initialCards.link;
  cardElement.querySelector(".card__image").alt = initialCards.name;

  resetButton.addEventListener("click", () => {
    onDelete(cardElement);
  });

  cardLike.addEventListener("click", () => onLike(cardLike));

  cardImage.addEventListener("click", () => {
    openImage(initialCards);
  });

  return cardElement;
}

// @todo: Функция удаления карточки
export function deleteCard(resetButton) {
  resetButton.remove();
}

//Лайк карточки
export function likeCard(cardLike) {
  cardLike.classList.toggle("card__like-button_is-active");
}

//открытие картинки
export function openImageClick(cardImage) {
  openModal(popupContent);

  popupImage.src = cardImage.link;
  popupImage.alt = cardImage.name;
  popapCaption.textContent = cardImage.name;
}

// @todo: Вывести карточки на страницу
export function renderCards() {
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

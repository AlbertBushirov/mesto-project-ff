// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// @todo: DOM узлы
const content = document.querySelector(".content");
export const placesList = content.querySelector(".places__list");

// @todo: Функция создания карточки
export function createCard(cardData, onDelete, onLike, openImage) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const resetButton = cardElement.querySelector(".card__delete-button");
  const cardLike = cardElement.querySelector(".card__like-button");
  const cardImage = cardElement.querySelector(".card__image");

  cardElement.querySelector(".card__title").textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  resetButton.addEventListener("click", () => {
    onDelete(cardElement);
  });

  cardLike.addEventListener("click", () => onLike(cardLike));

  cardImage.addEventListener("click", () => {
    openImage(cardData);
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

import { deleteMyCard, likeCards, deleteLikeCard } from "./api.js";

// @todo: Функция удаления карточки
export function deleteCard(cardElementId, cardElement) {
  deleteMyCard(cardElementId)
    .then(() => {
      cardElement.remove();
    })
    .catch((err) => {
      console.log(err);
    });
}

//Добавить лайк
function handleLikeButton(evt, cardLikeButton, cardData, cardLikeCounter) {
  const likeMethod = cardLikeButton.classList.contains(
    "card__like-button_is-active"
  )
    ? deleteLikeCard
    : likeCards;
  likeMethod(cardData._id)
    .then((res) => {
      cardLikeCounter.textContent = res.likes.length;
      likeCard(evt);
    })
    .catch((err) => {
      console.log(err);
    });
}

// @todo: Функция создания карточки
export function createCard(cardData, onDelete, likeCard, openImage, userId) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const resetButton = cardElement.querySelector(".card__delete-button");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardImage = cardElement.querySelector(".card__image");
  const cardLikeCounter = cardElement.querySelector(".card_like-counter");

  cardElement.querySelector(".card__title").textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardLikeCounter.textContent = cardData.likes.length;

  if (cardData.likes.some((user) => user._id === userId)) {
    cardLikeButton.classList.add("card__like-button_is-active");
  }

  if (cardData.owner._id === userId) {
    resetButton.disabled = true;
    resetButton.classList.add("visually-hidden");
  }

  resetButton.addEventListener("click", () => {
    deleteCard(cardData._id, cardElement);
  });

  cardLikeButton.addEventListener("click", (evt) => {
    handleLikeButton(evt, cardLikeButton, cardData, cardLikeCounter);
  });

  cardImage.addEventListener("click", () => {
    openImage(cardData);
  });

  return cardElement;
}

//Лайк карточки
export function likeCard(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

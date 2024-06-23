import { deleteMyCard, likeCards, deleteLikeCard } from "./api.js";

//Удалить лайк
function deleteLike(cardData, LikeHandler, counterLikes, countLikes, evt) {
  deleteLikeCard(cardData._id)
    .then((res) => {
      counterLikes.textContent = res.likes.length;
      dataCard.likes = res.likes;
      LikeHandler(evt);
      countLikes.textContent = calculateLikes(res);
    })
    .catch(handleError);
}

//Добавить лайк
function addLike(cardData, LikeHandler, counterLikes, countLikes, evt) {
  likeCards(cardData._id)
    .then((res) => {
      counterLikes.textContent = res.likes.length;
      dataCard.likes = res.likes;
      LikeHandler(evt);
      countLikes.textContent = calculateLikes(res);
    })
    .catch(handleError);
}

function cardLike(
  dataCard,
  userId,
  LikeHandler,
  counterLikes,
  countLikes,
  evt
) {
  dataCard.likes.some((item) => item._id === userId)
    ? deleteLike(cardData, LikeHandler, counterLikes, countLikes, evt)
    : addLike(cardData, LikeHandler, counterLikes, countLikes, evt);
}

// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

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
export function deleteCard(cardElementId, cardElement) {
  deleteMyCard(cardElementId).then(() => {
    cardElement.remove();
  });
}

//Лайк карточки
export function likeCard(element) {
  cardLike(userId, LikeHandler, counterLikes, countLikes, evt);
  element.classList.toggle("card__like-button_is-active");
}

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
    .catch((err) => {
      console.log(err);
    });
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
    .catch((err) => {
      console.log(err);
    });
}

// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

//Функция проверки лайка
function cardLike(LikeHandler, userId, countLikes, evt) {
  const cardLikeElement = cardElement.getElementsByTagName(
    "card__like-button_is-active"
  );
  if (dataCard.likes.some((item) => item._id === userId)) {
    for (let i = 0; i < cardLikeElement.length; i++) {
      deleteLike[i](cardData, LikeHandler, counterLikes, countLikes, evt);
    }
    for (let i = 0; i > cardLikeElement.length; i++) {
      addLike[i](cardData, LikeHandler, counterLikes, countLikes, evt);
    }
  }
}

// @todo: Функция создания карточки
export function createCard(cardData, onDelete, onLike, openImage, userId) {
  const resetButton = cardElement.querySelector(".card__delete-button");
  const cardLike = cardElement.querySelector(".card__like-button");
  const cardImage = cardElement.querySelector(".card__image");

  cardLike(LikeHandler, userId, cardData.owner._id);

  cardElement.querySelector(".card__title").textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  resetButton.addEventListener("click", () => {
    onDelete(cardElement, cardData._id);
  });

  cardLike.addEventListener("click", () => {
    onLike(cardLike);
  });

  cardImage.addEventListener("click", () => {
    openImage(cardData);
  });

  return cardElement;
}

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

//Лайк карточки
export function likeCard(element) {
  cardLike(LikeHandler, userId, counterLikes, countLikes, evt)
    .then(element._id.classList.toggle("card__like-button_is-active"))
    .catch((err) => {
      console.log(err);
    });
}

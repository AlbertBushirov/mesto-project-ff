// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template");
// @todo: DOM узлы
const content = document.querySelector(".content");
const places = content.querySelector(".places");
const resetButton = document.querySelector(".card__delete-button");
const placesList = content.querySelector(".places__list");

// @todo: Функция создания карточки
function addCard(initialCards, onDelete) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  cardElement.querySelector(".card__title").textContent = initialCards.name;
  cardElement.querySelector(".card__image").src = initialCards.link;
  cardElement.querySelector(".card__image").alt = initialCards.name;

  resetButton.addEventListener("click", () => {
    onDelete(cardElement);
  });

  return cardElement;
}
const result = addCard(initialCards[0], deleteCard);
console.log(result);
// @todo: Функция удаления карточки
function deleteCard() {}
// @todo: Вывести карточки на страницу
function renderCards() {
  for (let i = 0; i < initialCards.length; i++) {
    placesList.append(initialCards[i]);
  }
}
renderCards();

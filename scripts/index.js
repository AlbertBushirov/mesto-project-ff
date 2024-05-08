// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// @todo: DOM узлы
const content = document.querySelector(".content");
const places = content.querySelector(".places");
const resetButton = cardTemplate.querySelector(".card__delete-button");
const placesList = content.querySelector(".places__list");

// @todo: Функция создания карточки
function addCard(initialCards, onDelete) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const resetButton = cardElement.querySelector(".card__delete-button");

  cardElement.querySelector(".card__title").textContent = initialCards.name;
  cardElement.querySelector(".card__image").src = initialCards.link;
  cardElement.querySelector(".card__image").alt = initialCards.name;

  resetButton.addEventListener("click", () => {
    onDelete(cardElement);
  });

  return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(resetButton) {
  resetButton.remove();
}

// @todo: Вывести карточки на страницу
function renderCards() {
  for (let i = 0; i < initialCards.length; i++) {
    const result = addCard(initialCards[i], deleteCard);
    placesList.append(result);
  }
}
renderCards();

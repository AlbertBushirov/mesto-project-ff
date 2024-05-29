// Функция открытия по клику
function openModal(popupElement) {
  popupElement.classList.add("popup_is-opened");
  popupElement.classList.toggle("popup_is-animated");
  document.addEventListener("keydown", handleEscape);
}
// Функция закрытие по крестику
function closeModal(popupElement) {
  popupElement.classList.remove("popup_is-opened");
  popupElement.classList.toggle("popup_is-animated");
  document.removeEventListener("keydown", handleEscape);
}
// Функция закрытия на esc
function handleEscape(evt) {
  if (evt.key === "Escape") {
    const openPopup = document.querySelector(".popup_is-opened");
    closeModal(openPopup);
  }
}
export { openModal, closeModal };

const formElement = document.querySelector(".popup__form");
console.log("formElement");
const formInput = formElement.querySelector(".popup__input");
const formError = formElement.querySelector(`.${formInput.id}-error`);

const showInputError = (element, errorMessage) => {
  element.class.add("form__input_type_error");

  formError.textContent = errorMessage;
  formError.classList.add("form__input-error_active");
};

const hideInputError = (element) => {
  element.classList.remove("form__input_type_error");
  formError.classList.remove("form__input-error_active");

  formError.textContent = "";
};

const isValid = () => {
  if (!formInput.validity.valid) {
    showInputError(formInput, formInput.validationMessage);
  } else {
    hideInputError(formInput);
  }
};

formInput.addEventListener("input", isValid);

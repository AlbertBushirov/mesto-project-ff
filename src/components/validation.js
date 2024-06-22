export const enableValidation = (validation) => {
  const setEventListeners = (formElement, validation) => {
    const inputList = Array.from(
      formElement.querySelectorAll(validation.inputSelector)
    );
    const buttonElement = formElement.querySelector(
      validation.submitButtonSelector
    );

    toggleButtonState(inputList, buttonElement, validation);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        isValid(formElement, inputElement, validation);
        toggleButtonState(inputList, buttonElement, validation);
      });
    });
  };

  const isValid = (formElement, inputElement, validation) => {
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
      inputElement.setCustomValidity("");
    }

    if (!inputElement.validity.valid) {
      showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        validation
      );
    } else {
      hideInputError(formElement, inputElement, validation);
    }
  };

  const showInputError = (
    formElement,
    inputElement,
    errorMessage,
    validation
  ) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validation.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validation.errorClass);
  };

  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  const toggleButtonState = (inputList, buttonElement, validation) => {
    if (hasInvalidInput(inputList)) {
      disableSubmitButton(buttonElement, validation);
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove(validation.inactiveButtonClass);
    }
  };

  const formList = document.querySelectorAll(validation.formSelector);
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, validation);
  });
};

const hideInputError = (formElement, inputElement, validation) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validation.inputErrorClass);
  errorElement.classList.remove(validation.errorClass);
  errorElement.textContent = "";
};

export function clearValidation(formElement, validation) {
  const inputList = Array.from(
    formElement.querySelectorAll(validation.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    validation.submitButtonSelector
  );

  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, validation);
  });
  disableSubmitButton(buttonElement, validation);
}

const disableSubmitButton = (button, validation) => {
  button.disabled = true;
  button.classList.add(validation.inactiveButtonClass);
};

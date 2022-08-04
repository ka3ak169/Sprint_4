const showInputError = (formElement, inputElement, errorMessage) => { 
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
}; 

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
    return false
  } else {
    hideInputError(formElement, inputElement);
    return true
  }
}

const setListeners = (form) => {
  // слушатель ввода
  const formInputs = Array.from(form.querySelectorAll('.popup__form-input'));
  const button = form.querySelector('.submit-button');
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      isValid(form, input);
      setSubmitButtonState(formInputs, button)
      })
    })
  };
  
  // слушатель submit
  const enableValidation = () => {
  const formElements = Array.from(document.querySelectorAll('.popup__form'));
  formElements.forEach(form => {
    addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setListeners(form);
    }
  );
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
 return !inputElement.validity.valid;    
 })
};

// Переключаем кнопку
function setSubmitButtonState(inputList, button) {
  // проверяем валидность 
  if (hasInvalidInput(inputList)) {
    button.setAttribute('disabled', true);
    button.classList.add('submit-button_invalid');
  } else {
    button.removeAttribute('disabled');
    button.classList.remove('submit-button_invalid');

  }
};
  

enableValidation();


const showInputError = (formElement, inputElement, errorMessage) => { 
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = errorMessage;

};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = '';
}; 

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}


const setListeners = (form) => {
  // слушатель ввода
  const formInputs = Array.from(form.querySelectorAll('.form__input'));
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


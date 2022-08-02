// объект config формы Profile
const formProfile = {
  form: '.profile-popup__form',
  button: '.profile-popup__submit-button',
  input: '.profile-popup__input',
  buttonValid: 'profile-popup__submit-button_valid',
  buttonInvalid: 'profile-popup__submit-button_invalid',
}

// объект config формы Card
const formCard = {
  form: '.card-popup__form',
  button: '.card-popup__submit-button',
  input: '.card-popup__input',
  buttonValid: 'card-popup__submit-button_valid',
  buttonInvalid: 'card-popup__submit-button_invalid',
  error: '.error',
}


const formElement = document.querySelector(formCard.form);
const formInput = formElement.querySelector(formCard.input);
const formError = formElement.querySelector(formCard.error);

// показать текст ошибки
const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  formError.textContent = errorMessage;
};

// убрать текст ошибки
const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  formError.textContent = '';
};

// слушатель submit
formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

// слушатель ввода
formInput.addEventListener('input', function (evt) {
  console.log(evt.target.validity);
  checkInputValidity();
});

// проверка валидности
const checkInputValidity = (formElement, inputElement) => {
  if (!formInput.validity.valid) {
    showError(formElement, inputElement, formInput.validationMessage);
   console.log('не валидна');
 } else {
  hideError(formElement, inputElement);
  console.log('валидна');
 }
};



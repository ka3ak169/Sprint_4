// объект config формы Profile
const formProfile = {
  form: '.profile-popup__form',
  button: '.profile-popup__submit-button',
  buttonValid: 'profile-popup__submit-button_valid',
  buttonInvalid: 'profile-popup__submit-button_invalid',
}

// объект config формы Card
const formCard = {
  form: '.card-popup__form',
  button: '.card-popup__submit-button',
  buttonValid: 'card-popup__submit-button_valid',
  buttonInvalid: 'card-popup__submit-button_invalid',
}


// ищем формы, устанавливаем слушатели
function enableValidation(config) {
  const form = document.querySelector(config.form);
  form.addEventListener('submit', handlerFormSubmit);

  form.addEventListener('input', (evt) => handlerFormInput(evt, config));
};

// действия по кнопке submit
function handlerFormSubmit(evt) {
  evt.preventDefault();

// ищем форму в объекте на коротом установлено действие
  const form = evt.currentTarget; 

// Проверяем валидность формы
  const isValid = form.checkValidity();

  if (isValid) {
    console.log('Валидна!');
    form.reset();
  } else {
    console.log('Не валидна!');
  }
};


// действия при вводе
function handlerFormInput (evt, config) {
  const input = evt.target;
  const form = evt.currentTarget;

// передаем текст ошибки в поле span
  setFieldError(input);

// Переключаем кнопку
  setSubmitButtonState(form, config);

};


// передаем текст ошибки в поле span
function setFieldError(input) {
  const span = input.nextElementSibling;
  // текст ошибки
  span.textContent = input.validationMessage;
};


// Переключаем кнопку
  function setSubmitButtonState(form, config) {
    // нашли кнопку в форме
    const button = form.querySelector(config.button);
    // проверяем валидность 
    const isValid = form.checkValidity();


    if (isValid) {
      button.removeAttribute('disabled');
      button.classList.remove(config.buttonInvalid);
      button.classList.add(config.buttonValid);
    } else {
      button.setAttribute('disabled', true);
      button.classList.remove(config.buttonValid);
      button.classList.add(config.buttonInvalid);
    }
  };


enableValidation(formProfile);
enableValidation(formCard);

// объект config формы Profile
const formProfile = {
  form: '.profile-popup__form',
  button: '.profile-popup__submit-button',

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
    alert('Валидна!');
    form.reset();
  } else {
    alert('Не валидна!');
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

    const isValid = form.checkValidity();


    if (isValid) {
      button.removeAttribute('disabled');
      button.classList.remove('profile-popup__submit-button_invalid');
      button.classList.add('profile-popup__submit-button_valid');
    } else {
      button.setAttribute('disabled', true);
      button.classList.remove('profile-popup__submit-button_valid');
      button.classList.add('profile-popup__submit-button_invalid');
    }
  };


enableValidation(formProfile);
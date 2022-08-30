export class FormValidator {

  constructor (data, formSelector) {
    this._formSelector = formSelector;
    this._input = this._formSelector.querySelector(data.input);
    this._submitBtn = this._formSelector.querySelector(data.submitBtn);
  };

  _showError(input) {
    const errorElement = this._formSelector.querySelector(`.${input.id}-error`);
    errorElement.textContent = input.validationMessage;
  };

  _hideError(input) {
    const errorElement = this._formSelector.querySelector(`.${input.id}-error`);
    errorElement.textContent = '';
  };

  _isValid(input) {
    if (!input.validity.valid) {
      this._showError(input);
    } else {
      this._hideError(input);
    }
  };

      // слушатель ввода
  _setListeners() {
    const formInputs = Array.from(this._formSelector.querySelectorAll('.popup__form-input'));
    formInputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._isValid(input);
        this._setSubmitButtonState(formInputs);
      })
    })
  };

  _hasInvalidInput(inputList) {
    return inputList.some((input) => {
    return !input.validity.valid;
    })
  };

  _setSubmitButtonState(inputList) {
    if (this._hasInvalidInput(inputList)) {
      this._submitBtn.setAttribute('disabled', true);
      this._submitBtn.classList.add('submit-button_invalid');
    } else {
      this._submitBtn.removeAttribute('disabled');
      this._submitBtn.classList.remove('submit-button_invalid');
    }
  };
  
  disableSubmitButton() {
    this._submitBtn.setAttribute('disabled', true);
    this._submitBtn.classList.add('submit-button_invalid');
  }; 

  enableValidation () {
    this._setListeners();
  };
};
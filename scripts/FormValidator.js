export class FormValidator {
  constructor (data, formSelector) {
    this._input = data.input;
    this._submitBtn = data.submitBtn;
    this._submitBtnInvalid = data._submitBtnInvalid;
    this._formSelector = formSelector;
  }

  _showError(input) {
    const errorElement = this._formSelector.querySelector(`.${input.id}-error`);
    errorElement.textContent = input.validationMessage;
  }

  _hideError(input) {
    const errorElement = this._formSelector.querySelector(`.${input.id}-error`);
    errorElement.textContent = '';
  }

  _isValid(input) {
    console.log(input);
    if (!input.validity.valid) {
      this._showError(input);
    } else {
      this._hideError(input);
    }
  }

      // слушатель ввода
  _setListeners() {
    const formInputs = Array.from(this._formSelector.querySelectorAll('.popup__form-input'));
    const button = this._formSelector.querySelector('.submit-button');    
    formInputs.forEach((input) => {
      input.addEventListener('input', () => {
        console.log('456');
        console.log(button);
        this._isValid(input);
        this._setSubmitButtonState(formInputs, button);
        })
      })
    };

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
   })
  };


  _setSubmitButtonState(inputList, button) {
    if (_hasInvalidInput(inputList)) {
      button.setAttribute('disabled', true);
      button.classList.add(this._submitBtnInvalid);
    } else {
      button.removeAttribute('disabled');
      button.classList.remove(this._submitBtnInvalid);
    }
  }    
  

  enableValidation () {
      this._setListeners(); 
  }

};
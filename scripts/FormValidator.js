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
    // console.log(input);
    if (!input.validity.valid) {
      this._showError(input);
    } else {
      this._hideError(input);
    }
  }

      // слушатель ввода
  _setListeners() {
    const formInputs = Array.from(this._formSelector.querySelectorAll('.popup__form-input'));
    formInputs.forEach((input) => {
      input.addEventListener('input', () => {
        // console.log(this._submitBtn);
        this._isValid(input);
        // this.abc(formInputs);
        console.log(this._hasInvalidInput(formInputs));

        this._setSubmitButtonState(formInputs);
        })
      })
    };

   abc(int) {console.log(int);}

  _hasInvalidInput(list) {
    return list.some((elem) => {
    return !elem.validity.valid;
   })
  };


  _setSubmitButtonState(list) {
    if (this._hasInvalidInput(list)) {
      this._submitBtn.setAttribute('disabled', true);
      this._submitBtn.classList.add('submit-button_invalid');
    } else {
      this._submitBtn.removeAttribute('disabled');
      this._submitBtn.classList.remove('submit-button_invalid');
    }
  }    
  

  enableValidation () {
      this._setListeners(); 
  }

};
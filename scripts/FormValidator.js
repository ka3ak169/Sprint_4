export class FormValidator {
  constructor (data, formSelector) {
    this._input = data.input;
    this._submitBtn = data.submitBtn;
    this._form = data.form;
    this._submitBtnInvalid = data._submitBtnInvalid;
    this._formSelector = formSelector;
  }

  enableValidation () {
    // alert('hi');
    console.log(formSelector);
  }
};
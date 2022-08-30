import { openImagePopup } from './index.js'

export class Card {
    
    constructor (data, templateSelector) {
      this._name = data.name;
      this._link = data.link;
      this._templateSelector = templateSelector;
    };

    _getTemplate () {
      const cardElement = document.querySelector(this._templateSelector).content.querySelector('.elements__element').cloneNode(true);
      return cardElement;
    };

    generateCard () {
      this._element = this._getTemplate();
      this._setEventListeners();

      this._element.querySelector('.elements__image').src = this._link;
      this._element.querySelector('.elements__image').alt = this._name;
      this._element.querySelector('.elements__place').textContent = this._name;
      
      return this._element;
    };

    _cardTrash = () => {
      this._element.remove();
    };

    _cardLike = () => {
      this._element.querySelector('.elements__like').classList.toggle('elements__like_active');
    };

    _openCardPopup = () => {
      openImagePopup(this._name, this._link);
    };

    _setEventListeners() {
      this._element.querySelector('.elements__trash').addEventListener('click', this._cardTrash);
      this._element.querySelector('.elements__like').addEventListener('click', this._cardLike);
      this._element.querySelector('.elements__image').addEventListener('click', this._openCardPopup);
    };
  };
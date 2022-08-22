import {Card} from './Card.js'
import {FormValidator} from './FormValidator.js'

const profilePopupContainer = document.querySelector('.profile-popup');
const profileEditBtn = document.querySelector('.profile__edit-button');
const profilePopupForm = profilePopupContainer.querySelector('.profile-popup__form');
const profilePopupCloseBtn = document.querySelector('.profile-popup__close-button');
const profilePopupInputName = profilePopupContainer.querySelector('.profile-popup-name');
const profilePopupInputActivity = profilePopupContainer.querySelector('.profile-popup-activity');
const profileName = document.querySelector('.profile__name');
const profileActivity = document.querySelector('.profile__activity');
// card-popup
const cardPopupAddBtn = document.querySelector('.profile__add-button');
const cardSubmitBtn = document.querySelector('.submit-button[name="card-submit"]')
const cardPopupElement = document.querySelector('.card-popup');
const cardPopupCloseBtn = cardPopupElement.querySelector('.card-popup__close-button');
const cardPopupInputPlace = cardPopupElement.querySelector('.card-popup-name');
const cardPopupInputLink = cardPopupElement.querySelector('.card-popup-activity');
const cardPopupFrom = cardPopupElement.querySelector('.card-popup__form');
// image popup
const imagePopupContainer = document.querySelector('.image-popup');
const imagePopupCloseBtn = imagePopupContainer.querySelector('.image-popup__close-button');

export const openPopup = function(popupName) {
  popupName.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscBtn);
};

const closePopup = function(popupName) {
  popupName.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscBtn);
};

const closePopupClickOverlay = function(popupName) {
  popupName.addEventListener('mousedown', function(evt) {
      if (evt.target !== evt.currentTarget) {
    return;
  }
  closePopup(popupName);
})
};

function closePopupEscBtn(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
     closePopup(openedPopup);
  }
};

const openProfilePopup = function() {
    openPopup(profilePopupContainer);
    profilePopupInputName.value = profileName.textContent;
    profilePopupInputActivity.value = profileActivity.textContent;
};

const formSubmitHandler = function(event) {
    event.preventDefault();

    profileName.textContent = profilePopupInputName.value;
    profileActivity.textContent = profilePopupInputActivity.value;
    closePopup(profilePopupContainer);
};

profileEditBtn.addEventListener('click', function() { openProfilePopup() });
profilePopupCloseBtn.addEventListener('click', function() { closePopup(profilePopupContainer) });
profilePopupForm.addEventListener('submit', formSubmitHandler);

// // image popup

imagePopupCloseBtn.addEventListener('click', function() { closePopup(imagePopupContainer) });

const cardsData = [
  {
  name: 'Карачаево-Черкессия',
  link: './image/kirill-pershin-1088404-unsplash.png'
},
{
  name: 'Милая кошечка Агата',
  link: './image/Агата.jpg'
},
{
  name: 'Милый котик Барсик',
  link: './image/Баркик.jpg'
},
{
  name: 'Милый котик Борис',
  link: './image/Борис.jpg'
},
{
  name: 'Милый котик Рыжик',
  link: './image/Рыжик.jpg'
},
{
  name: 'Милый котик Тимоша',
  link: './image/Тимоша.jpg'
}
];


cardsData.forEach((item) => {
  const card = new Card (item, '.card-template');
  const cardElement = card.generateCard();  
  document.querySelector('.elements').prepend(cardElement);
})

// // card-popup

const cardPopupSubmit = function(event) {
  event.preventDefault();
  const data = {
    name: cardPopupInputPlace.value,
    link: cardPopupInputLink.value
  };
  const card = new Card (data, '.card-template');
  const cardElement = card.generateCard();
  document.querySelector('.elements').prepend(cardElement);
  cardPopupFrom.reset();
  cardSubmitBtn.disabled = true;
  cardSubmitBtn.classList.add('submit-button_invalid');

  closePopup(cardPopupElement);
};

cardPopupAddBtn.addEventListener('click', function() { openPopup(cardPopupElement) });
cardPopupCloseBtn.addEventListener('click', function() { closePopup(cardPopupElement) })
cardPopupFrom.addEventListener('submit', cardPopupSubmit);
closePopupClickOverlay(cardPopupElement);
closePopupClickOverlay(imagePopupContainer);
closePopupClickOverlay(profilePopupContainer);
closePopupEscBtn(cardPopupElement);
closePopupEscBtn(imagePopupContainer);
closePopupEscBtn(profilePopupContainer);

const dataValidate = {
  input: '.popup__form-input',
  submitBtn: '.submit-button',
  form: '.popup__form',
  submitBtnInvalid: 'submit-button_invalid',
};

new FormValidator (dataValidate, profilePopupForm).enableValidation();


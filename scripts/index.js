import {Card} from './Card.js'
import {FormValidator} from './FormValidator.js'

const elements = document.querySelector('.elements');
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
const cardPopupElement = document.querySelector('.card-popup');
const cardPopupCloseBtn = cardPopupElement.querySelector('.card-popup__close-button');
const cardPopupInputPlace = cardPopupElement.querySelector('.card-popup-name');
const cardPopupInputLink = cardPopupElement.querySelector('.card-popup-activity');
const cardPopupFrom = cardPopupElement.querySelector('.card-popup__form');
// image popup
const imagePopupContainer = document.querySelector('.image-popup');
const imagePopupCloseBtn = imagePopupContainer.querySelector('.image-popup__close-button');
const imagePopupLink = imagePopupContainer.querySelector('.image-popup__image');
const imagePopupСaption = imagePopupContainer.querySelector('.image-popup__description');


export const openPopup = function(popupName) {
  popupName.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscBtn);
};

const closePopup = function(popupName) {
  popupName.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscBtn);
};

const bindPopupOverlayClickHandler = function(popupName) {
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
    profilePopupInputName.value = profileName.textContent;
    profilePopupInputActivity.value = profileActivity.textContent;
    openPopup(profilePopupContainer);
};

const handleProfileFormSubmit = function(event) {
    event.preventDefault();

    profileName.textContent = profilePopupInputName.value;
    profileActivity.textContent = profilePopupInputActivity.value;
    closePopup(profilePopupContainer);
};

profileEditBtn.addEventListener('click', function() { openProfilePopup() });
profilePopupCloseBtn.addEventListener('click', function() { closePopup(profilePopupContainer) });
profilePopupForm.addEventListener('submit', handleProfileFormSubmit);

// // image popup
imagePopupCloseBtn.addEventListener('click', function() { closePopup(imagePopupContainer) });

export const openImagePopup = function(name, link) {
  imagePopupLink.alt = name;
  imagePopupLink.src = link;
  imagePopupСaption.textContent = name;

  openPopup(imagePopupContainer);
};

const cardsData = [
  {
    name: "Карачаево-Черкессия",
    link: "./image/kirill-pershin-1088404-unsplash.png",
  },
  {
    name: "Милая кошечка Агата",
    link: "./image/Агата.jpg",
  },
  {
    name: "Милый котик Барсик",
    link: "./image/Баркик.jpg",
  },
  {
    name: "Милый котик Борис",
    link: "./image/Борис.jpg",
  },
  {
    name: "Милый котик Рыжик",
    link: "./image/Рыжик.jpg",
  },
  {
    name: "Милый котик Тимоша",
    link: "./image/Тимоша.jpg",
  },
];

// создаем карточку
const createCard = function (cardData) {
  const card = new Card (cardData, '.card-template');
  const cardElement = card.generateCard();
  return cardElement;
};

// изначальные карточки
cardsData.forEach((cardData) => {
  elements.prepend(createCard(cardData));
})

// // card-popup
const handleAddCardFormSubmit = function(event) {
  event.preventDefault();
  const cardData = {
    name: cardPopupInputPlace.value,
    link: cardPopupInputLink.value
  };

  elements.prepend(createCard(cardData));

  cardPopupFrom.reset();
  cardPopupValiadator.disableSubmitButton();

  closePopup(cardPopupElement);
};

cardPopupAddBtn.addEventListener('click', function() { openPopup(cardPopupElement) });
cardPopupCloseBtn.addEventListener('click', function() { closePopup(cardPopupElement) })
cardPopupFrom.addEventListener('submit', handleAddCardFormSubmit);
bindPopupOverlayClickHandler(cardPopupElement);
bindPopupOverlayClickHandler(imagePopupContainer);
bindPopupOverlayClickHandler(profilePopupContainer);
closePopupEscBtn(cardPopupElement);
closePopupEscBtn(imagePopupContainer);
closePopupEscBtn(profilePopupContainer);

const popupData = {
  input: '.popup__form-input',
  submitBtn: '.submit-button',
  submitBtnInvalid: 'submit-button_invalid',
};

const cardPopupValiadator = new FormValidator (popupData, cardPopupFrom);
const profilePopupValiadator = new FormValidator (popupData, profilePopupForm);

cardPopupValiadator.enableValidation();
profilePopupValiadator.enableValidation();
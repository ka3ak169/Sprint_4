const popupElement = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__form');
const listElement = document.querySelector('.elements');
const popupCloseBtnElement = popupElement.querySelector('.popup__close-button');
const popupOpenBtnElement = document.querySelector('.profile__edit-button');
const popupSubmitBtnElement = popupElement.querySelector('.popup__submit-button');
const popupInputName = popupElement.querySelector('.popup__input_place_name');
const poppuInputActivity = popupElement.querySelector('.popup__input_place_activity');
const pageProfileName = document.querySelector('.profile__name');
const pageProfileActivity = document.querySelector('.profile__activity');
// card-popup
const cardPopupAddBtn = document.querySelector('.profile__add-button');
const cardPopupElement = document.querySelector('.card-popup');
const cardPopupFrom = cardPopupElement.querySelector('.card-popup__form');
const cardPopupCloseBtn = cardPopupElement.querySelector('.card-popup__close-button');
const cardPopupInputPlace = cardPopupElement.querySelector('.card-popup__input_place_name');
const cardPopupInputLink = cardPopupElement.querySelector('.card-popup__input_place_activity');
const cardPopupSubmitBtn = cardPopupElement.querySelector('.card-popup__submit-button');
// card Add




// console.log(popupElement, popupCloseBtnElement, popupOpenBtnElement, popupInputName, poppuInputActivity, popupSubmitBtnElement, pageProfileName, pageProfileActivity);
// console.log(cardPopupFrom, cardPopupCloseBtn, cardPopupInputPlace, cardPopupInputLink, cardPopupSubmitBtn, cardPopupAddBtn);

// popup

const openPopup = function() {
    popupElement.classList.add('popup_opened');
    popupInputName.value = pageProfileName.textContent;
    poppuInputActivity.value = pageProfileActivity.textContent;
};

const closePopup = function() {
    popupElement.classList.remove('popup_opened');
};

const formSubmitHandler = function(event) {
    event.preventDefault();

    pageProfileName.textContent = popupInputName.value;
    pageProfileActivity.textContent = poppuInputActivity.value;
    closePopup();
}

popupOpenBtnElement.addEventListener('click', openPopup);  
popupCloseBtnElement.addEventListener('click', closePopup);
popupForm.addEventListener('submit', formSubmitHandler);



// card-popup

const openCardPopup = function() {
    cardPopupElement.classList.add('card-popup_opened');
};

const closeCardPopup = function() {
    cardPopupElement.classList.remove('card-popup_opened');
};

const cardPopupSubmit = function(event) {
    event.preventDefault();
    createCard(cardPopupInputPlace.value, cardPopupInputLink.value);

    console.log(cardPopupInputPlace.value, cardPopupInputLink.value);
    closeCardPopup();
};

const createCard = function(name, link) {
  const cadrTemplate = document.querySelector('.card-template').content.querySelector('.elements__element').cloneNode('true');
  const cardName = cadrTemplate.querySelector('.elements__place');
  const cardLink = cadrTemplate.querySelector('.elements__image');

  cardName.textContent = name;
  cardLink.alt = name;
  cardLink.src = link;


  listElement.prepend(cadrTemplate);

  console.log(cadrTemplate, cardName, cardLink);
};


const initialCard = function() {
  const cards = [
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

  cards.forEach(function(card) {
    createCard(card.name, card.link);
  });
}

initialCard();

cardPopupAddBtn.addEventListener('click', openCardPopup);
cardPopupCloseBtn.addEventListener('click', closeCardPopup);
cardPopupFrom.addEventListener('submit', cardPopupSubmit);





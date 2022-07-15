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
const page = document.querySelector('.page');
// card-popup
const cardPopupAddBtn = document.querySelector('.profile__add-button');
const cardPopupElement = document.querySelector('.card-popup');
const cardPopupFrom = cardPopupElement.querySelector('.card-popup__form');
const cardPopupCloseBtn = cardPopupElement.querySelector('.card-popup__close-button');
const cardPopupInputPlace = cardPopupElement.querySelector('.card-popup__input_place_name');
const cardPopupInputLink = cardPopupElement.querySelector('.card-popup__input_place_activity');
const cardPopupSubmitBtn = cardPopupElement.querySelector('.card-popup__submit-button');

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

    closeCardPopup();
};

const createImagePopup = function(name, link, card) {
  const imagePopupTemplate = document.querySelector('.image-template').content.querySelector('.image-popup').cloneNode('true');
  const imagePopupCloseBtn = imagePopupTemplate.querySelector('.image-popup__close-button');
  const imagePopupLink = imagePopupTemplate.querySelector('.image-popup__image');
  const imagePopupaption = imagePopupTemplate.querySelector('.image-popup__description');

  imagePopupLink.src = link;
  imagePopupLink.alt = name;
  imagePopupaption.textContent = name;

  card.addEventListener('click', function() {
    imagePopupTemplate.classList.add('image-popup_opened');
  });

  imagePopupCloseBtn.addEventListener('click', function() {
    imagePopupTemplate.classList.remove('image-popup_opened');
  });

  page.appendChild(imagePopupTemplate);
};

const createCard = function(name, link) {
  const card = document.querySelector('.card-template').content.querySelector('.elements__element').cloneNode('true');
  const cardName = card.querySelector('.elements__place');
  const cardLink = card.querySelector('.elements__image');
  const cardLike = card.querySelector('.elements__like');
  const cardTrash = card.querySelector('.elements__trash');

  cardName.textContent = name;
  cardLink.alt = name;
  cardLink.src = link;

  cardTrash.addEventListener('click', function() {
    card.remove();
  });

  cardLike.addEventListener('click', function() {
    cardLike.classList.toggle('elements__like_active');
  });

  createImagePopup(name, link, cardLink);

  listElement.prepend(card);
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





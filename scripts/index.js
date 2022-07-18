const listElement = document.querySelector('.elements');
const profilePopupContainer = document.querySelector('.profile-popup');
const profileEditBtn = document.querySelector('.profile__edit-button');
const profilePopupForm = profilePopupContainer.querySelector('.profile-popup__form');
const profilePopupCloseBtn = document.querySelector('.profile-popup__close-button');
const profilePopupInputName = profilePopupContainer.querySelector('.profile-popup__input_place_name');
const profilePopupInputActivity = profilePopupContainer.querySelector('.profile-popup__input_place_activity');
const ProfileName = document.querySelector('.profile__name');
const ProfileActivity = document.querySelector('.profile__activity');
const page = document.querySelector('.page');
// const content = document.querySelector('.content');
// card-popup
const cardPopupAddBtn = document.querySelector('.profile__add-button');
const cardPopupElement = document.querySelector('.card-popup');
const cardPopupCloseBtn = cardPopupElement.querySelector('.card-popup__close-button');
const cardPopupInputPlace = cardPopupElement.querySelector('.card-popup__input_place_name');
const cardPopupInputLink = cardPopupElement.querySelector('.card-popup__input_place_activity');
const cardPopupFrom = cardPopupElement.querySelector('.card-popup__form');

// const cardPopupSubmitBtn = cardPopupElement.querySelector('.card-popup__submit-button');

const openPopup = function(popupName) {
  popupName.classList.add('popup_opened');
}

const closePopup = function(popupName) {
  popupName.classList.remove('popup_opened');
}

// profile-popup

const openProfilePopup = function() {
    openPopup(profilePopupContainer);
    profilePopupInputName.value = ProfileName.textContent;
    profilePopupInputActivity.value = ProfileActivity.textContent;
};

const formSubmitHandler = function(event) {
    event.preventDefault();

    ProfileName.textContent = profilePopupInputName.value;
    ProfileActivity.textContent = profilePopupInputActivity.value;
    closePopup(profilePopupContainer);
}

profileEditBtn.addEventListener('click', function() {openProfilePopup()});
profilePopupCloseBtn.addEventListener('click', function() {closePopup(profilePopupContainer)});
profilePopupForm.addEventListener('submit', formSubmitHandler);

// // card-popup

const cardPopupSubmit = function(event) {
    event.preventDefault();
    createCard(cardPopupInputPlace.value, cardPopupInputLink.value);
    cardPopupFrom.reset();

    closePopup(cardPopupElement);
};

// // image popup
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

// // create card
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


// // initial card
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

cardPopupAddBtn.addEventListener('click', function() {openPopup(cardPopupElement)});
cardPopupCloseBtn.addEventListener('click', function() {closePopup(cardPopupElement)})
cardPopupFrom.addEventListener('submit', cardPopupSubmit);
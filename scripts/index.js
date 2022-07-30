const listElement = document.querySelector('.elements');
const profilePopupContainer = document.querySelector('.profile-popup');
const profileEditBtn = document.querySelector('.profile__edit-button');
const profilePopupForm = profilePopupContainer.querySelector('.profile-popup__form');
const profilePopupCloseBtn = document.querySelector('.profile-popup__close-button');
const profilePopupInputName = profilePopupContainer.querySelector('.profile-popup__input_place_name');
const profilePopupInputActivity = profilePopupContainer.querySelector('.profile-popup__input_place_activity');
const profileName = document.querySelector('.profile__name');
const profileActivity = document.querySelector('.profile__activity');
const page = document.querySelector('.page');
// card-popup
const cardPopupAddBtn = document.querySelector('.profile__add-button');
const cardPopupElement = document.querySelector('.card-popup');
const cardPopupCloseBtn = cardPopupElement.querySelector('.card-popup__close-button');
const cardPopupInputPlace = cardPopupElement.querySelector('.card-popup__input_place_name');
const cardPopupInputLink = cardPopupElement.querySelector('.card-popup__input_place_activity');
const cardPopupFrom = cardPopupElement.querySelector('.card-popup__form');
// card teamplate
const cardTemplate = document.querySelector('.card-template');
// image popup
const imagePopupContainer = document.querySelector('.image-popup');
const imagePopupCloseBtn = imagePopupContainer.querySelector('.image-popup__close-button');
const imagePopupLink = imagePopupContainer.querySelector('.image-popup__image');
const imagePopupaption = imagePopupContainer.querySelector('.image-popup__description');

const openPopup = function(popupName) {
  popupName.classList.add('popup_opened');
};

const closePopup = function(popupName) {
  popupName.classList.remove('popup_opened');
};

const closePopupClickOverlay = function(popupName) {
  popupName.addEventListener('click', function(evt) {
      if (evt.target !== evt.currentTarget) {
    return;
  }
  closePopup(popupName);
})
};

// const removePopupClickOverlay = function(popupName) {
//   popupName.removeEventListener('click', function(evt) {
//       if (evt.target !== evt.currentTarget) {
//     return;
//   }
// })
// };

const closePopupEscBtn = function(popupName) {
  document.addEventListener('keydown', function(event) {
    const key = event.key;
    if(key==='Escape' && popupName.classList.contains('popup_opened')) {
      closePopup(popupName);
    }
  });
}

// removeClosePopupEscBtn = function(popupName) {
//   document.removeEventListener('keydown', function(event) {
//     const key = event.key;
//     if(key === 'Escape' && popupName.classList.contains('popup_opened')) {
//       closePopup(popupName);
//     }
//   });
// }

// profile Popup

const openProfilePopup = function() {
  openPopup(profilePopupContainer);
  profilePopupInputName.value = profileName.textContent;
  profilePopupInputActivity.value = profileActivity.textContent;
  // profilePopupCloseBtn.addEventListener('click', closeProfilePopup);
  profilePopupForm.addEventListener('submit', formSubmitHandler);
  closePopupClickOverlay(profilePopupContainer);
  closePopupEscBtn(profilePopupContainer);
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

// // card-popup

const cardPopupSubmit = function(event) {
    event.preventDefault();
    const data = {
      name: cardPopupInputPlace.value,
      link: cardPopupInputLink.value
    };
    renderCard(data, listElement);
    cardPopupFrom.reset();

    closePopup(cardPopupElement);
};

// // image popup

imagePopupCloseBtn.addEventListener('click', function() { closePopup(imagePopupContainer) });

  // create card

const createCard = function(name, link, template) {
  const card = template.content.querySelector('.elements__element').cloneNode('true');
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

  cardLink.addEventListener('click', function () {

    imagePopupLink.src = link;
    imagePopupLink.alt = name;
    imagePopupaption.textContent = name;

    openPopup(imagePopupContainer);
  });

  return card;
};

  // render card

  const renderCard = function(data, place) {
    const cardData = createCard(data.name, data.link, cardTemplate);
    place.prepend(cardData);  
  };

// initial card

const initialCard = function() {
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

cardsData.forEach( item => renderCard(item, listElement));
}

initialCard();

cardPopupAddBtn.addEventListener('click', function() { openPopup(cardPopupElement) });
cardPopupCloseBtn.addEventListener('click', function() { closePopup(cardPopupElement) })
cardPopupFrom.addEventListener('submit', cardPopupSubmit);
closePopupClickOverlay(cardPopupElement);
closePopupClickOverlay(imagePopupContainer);
closePopupClickOverlay(profilePopupContainer);
closePopupEscBtn(cardPopupElement);
closePopupEscBtn(imagePopupContainer);
closePopupEscBtn(profilePopupContainer);


















// const closePopupClickOverlay = function(popupName) {
//   popupName.addEventListener('click', function(evt) {
//       if (evt.target !== evt.currentTarget) {
//     return;
//   }
//   closePopup(popupName);
// })
// };

// const removePopupClickOverlay = function(popupName) {
//   popupName.removeEventListener('click', function(evt) {
//       if (evt.target !== evt.currentTarget) {
//     return;
//   }
// })
// };

// const closePopupEscBtn = function(popupName) {
//   document.addEventListener('keydown', function(event) {
//     const key = event.key;
//     if(key==='Escape' && popupName.classList.contains('popup_opened')) {
//       closePopup(popupName);
//     }
//   });
// }

// removeClosePopupEscBtn = function(popupName) {
//   document.removeEventListener('keydown', function(event) {
//     const key = event.key;
//     if(key === 'Escape' && popupName.classList.contains('popup_opened')) {
//       closePopup(popupName);
//     }
//   });
// }

// // profile Popup

// const openProfilePopup = function() {
//     openPopup(profilePopupContainer);
//     profilePopupInputName.value = profileName.textContent;
//     profilePopupInputActivity.value = profileActivity.textContent;
//     profilePopupCloseBtn.addEventListener('click', closeProfilePopup);
//     profilePopupForm.addEventListener('submit', formSubmitHandler);
//     closePopupClickOverlay(profilePopupContainer);
//     closePopupEscBtn(profilePopupContainer);
// };



// const closeProfilePopup = function() {
//   profilePopupCloseBtn.removeEventListener('click', function() { closePopup(profilePopupContainer) });
//   profilePopupForm.removeEventListener('submit', formSubmitHandler);
//   removePopupClickOverlay(profilePopupContainer);
//   removeClosePopupEscBtn(profilePopupContainer);

//   closePopup(profilePopupContainer);
// };

// const formSubmitHandler = function(event) {
//   event.preventDefault();

//   profileName.textContent = profilePopupInputName.value;
//   profileActivity.textContent = profilePopupInputActivity.value;
//   closePopup(profilePopupContainer);
// };


// profileEditBtn.addEventListener('click', openProfilePopup);


// // // card-popup

// const cardPopupSubmit = function(event) {
//     event.preventDefault();
//     const data = {
//       name: cardPopupInputPlace.value,
//       link: cardPopupInputLink.value
//     };
//     renderCard(data, listElement);
//     cardPopupFrom.reset();

//     closePopup(cardPopupElement);
// };

// const openCardPopup = function() {
//   cardPopupAddBtn.addEventListener('click', function() { openPopup(cardPopupElement) });
//   cardPopupFrom.addEventListener('submit', cardPopupSubmit);
//   closePopupClickOverlay(cardPopupElement);
//   closePopupEscBtn(cardPopupElement);
// };

// const closeCardPopup = function() {
//   cardPopupCloseBtn.removeEventListener('click', function() { closePopup(cardPopupElement) });
//   cardPopupFrom.removeEventListener('submit', cardPopupSubmit);
//   removePopupClickOverlay(cardPopupElement);
//   removeClosePopupEscBtn(cardPopupElement);

//   closePopup(cardPopupElement);
// };

// cardPopupAddBtn.addEventListener('click', openCardPopup);

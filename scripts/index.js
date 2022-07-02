const popupElement = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__form');
const popupCloseBtnElement = popupElement.querySelector('.popup__close-button');
const popupOpenBtnElement = document.querySelector('.profile__edit-button');
const popupSumbitBtnElement = popupElement.querySelector('.popup__submit-button');
const popupInputName = popupElement.querySelector('.popup__place_name');
const poppuInputActivity = popupElement.querySelector('.popup__place_activity');
const pageProfileName = document.querySelector('.profile__name');
const pageProfileActivity = document.querySelector('.profile__activity');

// console.log(popupElement, popupCloseBtnElement, popupOpenBtnElement, popupInputName, poppuInputActivity, popupSumbitBtnElement, pageProfileName, pageProfileActivity);


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





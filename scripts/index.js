const popupElement = document.querySelector('.popup');
const popupCloseBtnElement = popupElement.querySelector('.popup__close-button');
const popupOpenBtnElement = document.querySelector('.profile__edit-button');
const popupSumbitBtnElement = popupElement.querySelector('.popup__submit-button');
let popupInputName = popupElement.querySelector('.popup__name');
let poppuInputActivity = popupElement.querySelector('.popup__activity');
let pageProfileName = document.querySelector('.profile__name');
let pageProfileActivity = document.querySelector('.profile__activity');

// console.log(popupElement, popupCloseBtnElement, popupOpenBtnElement, popupInputName, poppuInputActivity, popupSumbitBtnElement, pageProfileName, pageProfileActivity);


const openPopup = function() {
    popupElement.classList.add('popup_opened');
    popupInputName.value = pageProfileName.textContent;
    poppuInputActivity.value = pageProfileActivity.textContent;
};
const closePopup = function() {
    popupElement.classList.remove('popup_opened');
};

popupOpenBtnElement.addEventListener('click', openPopup);
popupCloseBtnElement.addEventListener('click', closePopup);
popupSumbitBtnElement.addEventListener('click', closePopup);

function formSubmitHandler(event) {
    event.preventDefault();

    pageProfileName.textContent = popupInputName.value;
    pageProfileActivity.textContent = poppuInputActivity.value;
    closePopup;

}

popupElement.addEventListener('submit', formSubmitHandler);



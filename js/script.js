var popup = document.querySelector('.popup-write-us');
var openPopupButton = document.querySelector('.popup-write-us-open');
var closePopupButton = document.querySelector('.popup-write-us-close');
var popupMap = document.querySelector('.popup-map');
var openPopupMapButton = document.querySelector('.map');
var closePopupMapButton = document.querySelector('.popup-map-close');


openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('popup-write-us--show');
});

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('popup-write-us--show');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove('popup-write-us--show');
  }
});

openPopupMapButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMap.classList.add('popup-map--show');
});

closePopupMapButton.addEventListener('click', function () {
  popupMap.classList.remove('popup-map--show');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popupMap.classList.remove('popup-map--show');
  }
});
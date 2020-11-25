"use strict"

// События

// Задача: Модальное окно с контактами компании
// Запрограммируй всплывающее окно с контактами компании. Тебе нужен элемент с
// классом modal.
// При клике по кнопке с классом button-open попапу должен добавляться класс
// modal--show, так окно появится на странице.
// По клику по кнопке с классом button-close у окна должен удаляться класс
// modal--show, и попап должен закрыться.

let openButton = document.querySelector ('.button-open');
let closeButton = document.querySelector ('.button-close');
let modal = document.querySelector ('.modal');


// openButton.onclick = function() {
//   modal.classList.toggle('modal-close');
//   modal.classList.toggle('modal-open');
// };

// closeButton.onclick = function() {
//   modal.classList.toggle('modal-close');
//   modal.classList.toggle('modal-open');
// };

let modalHandler = function() {
  modal.classList.toggle('modal-close');
  modal.classList.toggle('modal-open');
};

openButton.onclick = modalHandler;
closeButton.onclick = modalHandler;
"use strict"

//Сделать открытие и закрытие модального окна со спецпредложением при клике на
//соответствующие кнопки. Также пользователь может закрыть попап при нажатии ESC
let openButton = document.querySelector ('.button-open');
let closeButton = document.querySelector ('.button-close');
let modal = document.querySelector ('.modal');

let modalHandler = function() {
  modal.classList.toggle('modal-open');
  modal.classList.toggle('modal-close');
};
window.addEventListener('keyup', function(event){
  if (event.code == 'Escape' && document.querySelector ('.modal-open')){
    modal.classList.remove('modal-open');
    modal.classList.toggle('modal-close');
  }
});

setInterval(function(){
  modal.classList.remove('modal-open');
  modal.classList.add('modal-close');
}, 5000);

openButton.onclick = modalHandler;
closeButton.onclick = modalHandler;
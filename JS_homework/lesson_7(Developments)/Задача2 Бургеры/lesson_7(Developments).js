"use strict"

//Создай адаптивное меню, которое сворачивается в бургер-меню при ширине экрана
//менее 1024 пикселей. Более этой ширины меню только десктопное.

let headerNavOpen = document.querySelector('.header_nav_open');
let menu = document.querySelector('.menu');


let modalHandler = function() {
  headerNavOpen.classList.toggle('header_nav_close');
};
let modalHand = function() {
  if(window.innerWidth < 1024){
  headerNavOpen.classList.toggle('header_nav_close');
  }
}
menu.onclick = modalHandler;
window.onresize = modalHand;



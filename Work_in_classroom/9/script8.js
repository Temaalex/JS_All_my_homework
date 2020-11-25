'use strict';

let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.modal_close');

function openModal(){
  modal.style.display = 'flex';
}
function closeOpen(){
  modal.style.display = 'none';
}

let timeOutId = setTimeout(openModal, 2000);
clearTimeout(timeOutId);
let intervalId = setInterval(openModal, 2000);
clearInterval(intervalId);
//Отмена

modalClose.onclick = closeOpen;

//время

let clockElement = document.querySelector('.clock');

function showTime(){
  let date = new Date();
  let time = date.toLocaleTimeString();
  clockElement.textContent = time;
};

showTime();
setInterval(showTime, 1000);


let itemElement = document.querySelector('.item');
function startTransition (){
  itemElement.classList.add('animated');
  itemElement.addEventListener('transitionend', function(){ 
    itemElement.classList.remove('animated');
})
}
setInterval(startTransition, 5000);
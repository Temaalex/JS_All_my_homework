"use strict"

// События



// let openButton = document.querySelector ('.button-open');
// let closeButton = document.querySelector ('.button-close');
// let modal = document.querySelector ('.modal');


// let modalHandler = function(evt) {
//   evt.preventDefault();
//   modal.classList.toggle('modal-close');
//   modal.classList.toggle('modal-open');
// };

// openButton.addEventListener('click', modalHandler);
// closeButton.addEventListener('click', modalHandler);

let photos = [
  'https://picsum.photos/id/1011/500/300',
  'https://picsum.photos/id/1015/500/300',
  'https://picsum.photos/id/102/500/300',
  'https://picsum.photos/id/1025/500/300',
  'https://picsum.photos/id/1043/500/300'
];
  
let counter = 0;
let nextButton = document.querySelector ('.next-btn');
let prevButton = document.querySelector ('.prev-btn');
let sliderButton = document.querySelector ('.slider img');

nextButton.onclick = function(){
  counter++;
  if (counter >= photos.length){
    counter = 0;
  }
  sliderButton.src = photos[counter];
};
prevButton.onclick = function(){
  counter--;
  if (counter < 0){
    counter = photos.length-1;
  }
  sliderButton.src = photos[counter];
};

/*Фотогалерея*/ 
// let photos = [
//   'https://picsum.photos/id/1011/500/300',
//   'https://picsum.photos/id/1015/500/300',
//   'https://picsum.photos/id/102/500/300',
//   'https://picsum.photos/id/1025/500/300',
//   'https://picsum.photos/id/1043/500/300'
// ];

// let fullPhoto = document.querySelector('.full-photo');
// let previews = document.querySelectorAll('.gallery-preview');

// let getPreview  = function(preview,photo){
//   preview.addEventListener('click', function(){
//     fullPhoto.src=photo;
//   });
// };

// for (let i= 0; i<previews.length; i++){
//   getPreview(previews[i],photos[i]);
// }
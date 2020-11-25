"use strict"

/*Фотогалерея*/ 
let photos = [
  'https://picsum.photos/id/1011/500/300',
  'https://picsum.photos/id/1015/500/300',
  'https://picsum.photos/id/102/500/300',
  'https://picsum.photos/id/1025/500/300',
  'https://picsum.photos/id/1043/500/300'
];

let fullPhoto = document.querySelector('.full-photo');
let previews = document.querySelectorAll('.gallery-preview');

let getPreview  = function(preview,photo){
  preview.addEventListener('click', function(){
    fullPhoto.src=photo;
  });
};

for (let i= 0; i<previews.length; i++){
  getPreview(previews[i],photos[i]);
}
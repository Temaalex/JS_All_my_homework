"use strict"

let picture = document.querySelector('.picture');

let openPicture = function (){
  picture.classList.toggle('picture_after');
  function addShadow(){
    picture.classList.add('shadow');
  }
  setTimeout(addShadow,3000);
}

picture.onclick = openPicture
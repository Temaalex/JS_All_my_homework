'use strict';

let galleryImg = document.querySelectorAll('.gallery-img');
let filter = document.querySelector('#news-list');

filter.addEventListener('change', function(){
    for(let article of galleryImg){
      if(article.dataset.category !== filter.value){
        article.classList.add('hidden');
      } else {
        article.classList.remove('hidden');
      }
  
      if (filter.value === "all"){
        article.classList.remove('hidden');
      }
    }
  });
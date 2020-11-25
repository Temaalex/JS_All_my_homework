"use strict"

//Задача two
var assortmentData = [
  {
  inStock: true,
  isHit: false
  },
  {
  inStock: false,
  isHit: false
  },
  {
  inStock: true,
  isHit: true
  },
  {
  inStock: true,
  isHit: false
  },
  {
  inStock: false,
  isHit: false
  }];

  let iceGood = document.querySelectorAll('.good');
  let goodPrice = document.querySelectorAll('.good__price');


function updateCards (array){
  for (let i = 0; i<array.length; i++){
    if (array[i].inStock){
      iceGood[i].classList.toggle('good--available');
    } else {
      iceGood[i].classList.toggle('good--unavailable');
    }
    if (array[i].isHit){
      iceGood[i].classList.toggle('good--hit');
      goodPrice[i].classList.add('good-price-line-through');
  
      let newPrice = goodPrice[i].cloneNode(true); 
      newPrice.classList.toggle('good-price-unline');
      
      let newPrice1 = goodPrice[i].textContent;
      newPrice.textContent = parseInt(newPrice1.match(/\d+/)*0.8)+' ₽/кг'; 
      iceGood[i].append(newPrice);
    }
  }
}
updateCards(assortmentData)
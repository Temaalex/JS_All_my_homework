"use strict"

//Задача three
let cardsData = [
  {
  isAvailable: true,
  imgUrl: 'https://www.flaticon.com/svg/static/icons/svg/3612/3612065.svg',
  text: 'Костюм зомби',
  price: 2000,
  isSpecial: false
  },
  {
  isAvailable: false,
  imgUrl: 'https://www.flaticon.com/svg/static/icons/svg/2534/2534536.svg',
  text: 'Костюм огра',
  price: 1500,
  isSpecial: false
  },
  {
  isAvailable: true,
  imgUrl: 'https://www.flaticon.com/svg/static/icons/svg/3612/3612089.svg',
  text: 'Костюм монстра',
  price: 2500,
  isSpecial: false
  },
  {
  isAvailable: true,
  imgUrl: 'https://www.flaticon.com/svg/static/icons/svg/3612/3612274.svg',
  text: 'Костюм смерти',
  price: 2000,
  isSpecial: false
  },
  {
  isAvailable: true,
  imgUrl: 'https://www.flaticon.com/svg/static/icons/svg/3612/3612347.svg',
  text: 'Костюм вампира',
  price: 4000,
  isSpecial: true,
  specialPrice: 1000
  }
];

//Клонирование с шаблона
let templateElement = document.querySelector('#element-template').content;
let products = document.querySelector('.products');
for(let i= 0; i<cardsData.length; i++){
  let template = templateElement.cloneNode(true);
  products.append(template);
}
//о наличии товаров, спец товаре и его цене
for (let i = 0; i<cardsData.length; i++){
  let product = document.querySelectorAll('.product');
  let productPrice = document.querySelectorAll('.product-price');
  if (cardsData[i].isAvailable){
    product[i].classList.toggle('product--available');
  } else {
    product[i].classList.toggle('product--unavailable');
  };
  if (cardsData[i].isSpecial){
    product[i].classList.add('product--special');
    let newPrice = productPrice[i].cloneNode(true);
    newPrice.textContent = cardsData[i].specialPrice;
    newPrice.classList.remove('product-price')
    newPrice.classList.add('product-special-price')
    product[i].append(newPrice);
  }
}
//о названии
for (let i = 0; i<cardsData.length; i++){
  let productTitle = document.querySelectorAll('.product-title');
  if (cardsData[i].text){
    productTitle.textContent = cardsData[i].text;
    let x = productTitle.textContent;
    productTitle[i].append(x);
  };
}
//о цене
for (let i = 0; i<cardsData.length; i++){
  let productPrice = document.querySelectorAll('.product-price');
  if (cardsData[i].text){
    productPrice.textContent = cardsData[i].price;
    let x = productPrice.textContent;
    productPrice[i].append(x);
  };
}
//о изображении
for (let i = 0; i<cardsData.length; i++){
  if (cardsData[i].imgUrl){
    let productImage = document.querySelectorAll('.product-image');
    productImage=productImage[i];
    productImage.src = cardsData[i].imgUrl;
    productImage.alt = cardsData[i].text;
  }
}

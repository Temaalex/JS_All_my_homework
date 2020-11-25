"use strict"
//Задача four
let cardsData = [
  {
    inStock: true,
    imgUrl: 'https://www.flaticon.com/svg/static/icons/svg/3198/3198663.svg',
    text: 'Сливочно-кофейное с кусочками шоколада',
    price: '210 ₽/кг',
    specialOffer: '110 ₽/кг',
    isHit: true,
  },
  {
    inStock: false,
    imgUrl: 'https://www.flaticon.com/svg/static/icons/svg/3198/3198662.svg',
    text: 'Сливочно-лимонное с карамельной присыпкой',
    price: '220 ₽/кг',
    specialOffer: false,
    isHit: false,
  },
  {
    inStock: true,
    imgUrl: 'https://www.flaticon.com/svg/static/icons/svg/3198/3198659.svg',
    text: 'Сливочное с брусничным джемом',
    price: '310 ₽/кг',
    specialOffer: false,
    isHit: false,
  },
  {
    inStock: true,
    imgUrl: 'https://www.flaticon.com/svg/static/icons/svg/3198/3198666.svg',
    text: 'Сливочное с кусочками печенья',
    price: '400 ₽/кг',
    specialOffer: false,
    isHit: false,
  },
  {
    inStock: true,
    imgUrl: 'https://www.flaticon.com/svg/static/icons/svg/3198/3198664.svg',//+
    text: 'Сливочное крем-брюле',
    price: '500 ₽/кг',
    specialOffer: false,
    isHit: false,
  },
];
//Клонирование с шаблона
let templateElement = document.querySelector('#element-template').content;
let goods = document.querySelector('.goods');
for(let i= 0; i<cardsData.length; i++){
  let template = templateElement.cloneNode(true);
  goods.append(template);
}
function renderCard (arr){
  for (let i = 0; i<arr.length; i++){
    let good = document.querySelectorAll('.good');
    let goodDescription = document.querySelectorAll('.good__description');
    let goodPrice = document.querySelectorAll('.good__price');
    let goodImg = document.querySelectorAll('.good__img');
    goodImg=goodImg[i];
    goodImg.src = arr[i].imgUrl;
    goodImg.alt = arr[i].text;
    goodDescription.textContent = arr[i].text;
    let x = goodDescription.textContent;
    goodDescription[i].append(x);
    if (arr[i].inStock){
      good[i].classList.toggle('good--available');
    } else {
      good[i].classList.toggle('good--unavailable');
    };
    if (arr[i].specialOffer){
      good[i].classList.add('good--hit');
      goodPrice[i].classList.add('good-price-line-through');
      let newPrice = goodPrice[i].cloneNode(true);
      newPrice.textContent = arr[i].specialOffer;
      newPrice.classList.remove('good__price');
      newPrice.classList.remove('good-price-line-through');
      newPrice.classList.add('good__special-offer');
      good[i].append(newPrice);
    }
    if (arr[i].text){
      goodPrice.textContent = arr[i].price;
      let x = goodPrice.textContent;
      goodPrice[i].append(x);
    };    
  }  
}
renderCard(cardsData)
"use strict"

//Задача one
let catalogData = [
  {
  isAvailable: true,
  isSpecial: false
  },
  {
  isAvailable: false,
  isSpecial: false
  },
  {
  isAvailable: true,
  isSpecial: true
  },
  {
  isAvailable: true,
  isSpecial: false
  },
  {
  isAvailable: false, //в наличии товар или нет
  isSpecial: false //является ли товар спецпредложением или нет
  }
  ];

let product = document.querySelectorAll('.product');
//product--available product--special
let productTitle = document.querySelectorAll('.product-title');
//product--unavailable
let productPrice = document.querySelectorAll('.product-price');
let x = productPrice[0].textContent;
console.log (parseInt(x.match(/\d+/)));


for (let i = 0; i<catalogData.length; i++){
  if (catalogData[i].isAvailable){
    productTitle[i].classList.toggle('product--available');
  } else {
    product[i].classList.toggle('product--unavailable');
  }
  if (catalogData[i].isSpecial){
    product[i].classList.toggle('product--special');
    productPrice[i].classList.add('product-price-line-through');
    
    let newPrice = productPrice[i].cloneNode(true); //Клонируем элемент
    newPrice.classList.toggle('product-price-unline'); //Меняем стиль у клонированного элемента
    //Меняем значение клонированного элемента
    let newPrice1 = productPrice[i].textContent; // Получаем строку 300 ₽
    newPrice.textContent = parseInt(newPrice1.match(/\d+/)*0.8)+' ₽'; // Меняем строку на 300*0.8 ₽ = 240 ₽
    product[i].append(newPrice);// Выводим измененный клонированный элемент
  }
};

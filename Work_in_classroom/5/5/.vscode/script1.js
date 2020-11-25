"use strict"

let par1 = document.getElementById('test');
console.log(par1);

let par2 = document.getElementsByClassName ('text');
console.log(par2);

let par3 = document.getElementsByTagName ('p');
console.log(par3);

let par4 = document.querySelector ('.text');
console.log(par4);

let par5 = document.querySelectorAll ('.text');
console.log(par5);

//par1.remove();

console.log(par4.textContent);//Свойство textContent хранит в себе текстовое содержимое элемента.
console.log(par4.innerHTML);//Свойство интерфейса innerHTML устанавливает или получает HTML разметку дочерних элементов.

let text = par4.innerHTML;

par1.textContent = text;

//----------------------------------

let divElements = document.querySelectorAll(".block");

console.log(divElements);

//divElements[1].className = "item";

let imgElement = document.querySelector (".image");

imgElement.width = 300;

imgElement.alt="456";

imgElement.src = "img/1.jpg";

imgElement.style.border = "5px solid red"; //меняем свойства

divElements[1].style.backgroundColor = "green"; //Добавляет стиль

divElements[2].classList.add('item');// замена по классу
divElements[2].classList.remove('block');// удаление класса у элемента


//Задача
let goods = document.querySelectorAll(".good");

let assortmentData = [
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
  }
];
for (let i = 0; i<goods.length; i++){
  
    if (assortmentData[i].isHit){
    goods[i].classList.add('good--hit');
    }
    if (assortmentData[i].inStock){
      goods[i].classList.add('good--available');
    } else {
      goods[i].classList.add('good--unavailable');
    }
}
//--------------------------Создание дива
let newDiv = document.createElement('div');

newDiv.classList.add('block');

newDiv.textContent = "Текст дива";

document.body.append(newDiv) // создает в конце



//Добавление 6ого товара
let shopElement = document.querySelector('.shop');
let newGood =  document.createElement('div');
newGood.classList.add('good');
newGood.textContent = "Товар 6";
shopElement.append(newGood);


shopElement.append(goods[1]);//перемещение Товара 2 в конец

//Задача: добавить циклом 10 абзацев в блок div.ten

let divTen = document.createElement('div');
divTen.classList.add('ten');

for (let i = 1; i<= 10; i++){
  let par = document.createElement('p');
  par.textContent = i;
  divTen.append(par);
}
document.body.append(divTen);

// element.cloneNode(false) // копирует просто див
// element.cloneNode(true) // копирует все
//Клонирование элемента и замена содержимого
let blockElement = document.querySelector(".block-1").cloneNode(true);

let blockParent = document.querySelector(".blocks");

let blockElementTitel = blockElement.querySelector (".block-heading");
//Поменять заголовок на новый текст
blockElementTitel.textContent = "Заголовок 2";

blockParent.append(blockElement);

console.log(blockElement);

//Живые и неживые
console.log(goods);
console.log(shopElement.children);

goods[0].remove();

console.log(goods);
console.log(shopElement.children);







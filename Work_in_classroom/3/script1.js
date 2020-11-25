"use strict"

let i = 0;
let sum = 0;
let n = 10;
while (i < n) {
  if (i % 2 === 1){
  
  console.log( i );
  // sum = sum+i;
  }
  i++;
}
console.log( "сумма = " + sum );
console.log( "Счетчик = " + i );


console.log("--------------------------------------");


for (let i = 1; i < n; i=i+2) {
  console.log( i );
  //let sum = 0
  //sum = sum+i;
  }
console.log( "сумма = " + sum );
console.log( "Счетчик = " + i );


console.log("--------------------------------------");

i = 1;
sum = 0;
do {
console.log( i );
//sum = sum+i;
i=i+2;
} while (i < n);

console.log( "сумма = " + sum );
console.log( "Счетчик = " + i );

console.log("--------------------------------------");

for (let i = 0; i < 3; i++) {
  if (i==2) { break}
  console.log( i );
  }


console.log("--------------------------------------");

for (let i = 0; i < 3; i++) {
  if (i==2) { continue}
  console.log( i );
  }  


console.log("--------------------------------------");

var startNumber = 4;
var multiplier = 4;
var quantity = 7;

for (let i = 1; i <= quantity; i++)
{
  console.log(startNumber);
  startNumber = startNumber*multiplier;
}

console.log("--------------------------------------");

var lastNumber = 10;
sum = 0;

for (let i = 0; i <= lastNumber; i++){
  sum = sum+i;
}
console.log(sum);

console.log("--------------------------------------");

var lastNumber = 5;
sum = 1;

for (let i = 1; i <= lastNumber; i=i+2){
  sum = sum*sum;
}
console.log(sum);

console.log("--------------------------------------");

let arr = [1, 2, "три", 4, 5];

console.log (arr.length);// длина массива
console.log (arr[2]);
arr[5]=6 // добавляем масссив или fruits.push("Груша");
console.log (arr);
arr.push(7);
console.log (arr);
//shift удаляет элемент в начале, сдвигая очередь, так что второй элемент становится первым
arr.shift(arr);
console.log (arr.shift());
console.log (arr);
//pop удаляет последний элемент из массива и возвращает его:
arr.pop(arr);
console.log (arr.pop());
console.log (arr);
//unshift добавляет элемент в начало массива

let a_1 = arr.pop();
let a_2 = arr.shift();

console.log (arr);

arr.push(a_2);
console.log (arr);

arr.unshift(a_1);
console.log (arr);

//slice - возвращает новый массив, в который копирует элементы, начиная с индекса start и до end (не включая end).
// console.log (arr); //не копирует
// let mas=arr; //не копирует

var arr_1 = [1, 2, "три", 4, 5];
let mas=arr_1.slice();
console.log ("mas " + mas);
console.log ("mas " + arr_1);

//splice - начинает с позиции index, удаляет deleteCount элементов и вставляет elem1,
//..., elemN на их место. Возвращает массив из удалённых элементов.

mas.splice(2,1, 3); // удаляет часть массива, добавляет вместо этого 3
console.log ("mas " +mas);
console.log ("arr " +arr_1);

// concat - создаёт новый массив, в который копирует данные из других массивов и
// дополнительные значения.
// arr.concat(arg1, arg2...)


//Поиск элемента
console.log ("в arr_1 " +arr_1.length + ' элементов');
console.log ("в arr_1 последний индекс " +(arr_1.length-1) + ' элементов');
for (let i = 0; i < arr_1.length; i=i+2) {
  console.log (arr_1[i]);
}

console.log("--------------------------------------");

for (let i = 1; i < arr_1.length; i=i+2) {
  console.log (arr_1[i]);
}

//for...of - не предоставляет доступа к номеру текущего элемента, только к его
//значению
for (let namber of mas) {
    console.log (namber);
}

console.log("--------------------------------------");

//1. Заменить отрицательные элементы массива на противоположные по знаку

let numbers = [1, -2, "четыре", -5, 6, 7, -125];
console.log (numbers);
for (let i = 0; i <numbers.length; i++){

  if (numbers[i]<0){
    numbers.splice(i, 1, Math.abs(numbers[i]));
  } else {
    continue;
  }
}
console.log (numbers);

//2. Если элемент четный, то прибавить к нему первый, если нечетный - последний
//элемент массива. 1й и последний элементы не изменять.
console.log("--------------------------------------");
let numbers_1 = [1, -2, 4, -5, 6, 7, -125];
let firstElem = numbers_1[0];
let lastElem = numbers_1[numbers.length-1];

console.log (numbers_1);
for (let i = 1; i < (numbers_1.length - 1); i++){

  if (numbers_1[i]%2 == 0){
    numbers_1[i]=numbers_1[0]+firstElem;
  } else {
    numbers_1[i]=numbers_1[i]+lastElem;
  }
}
console.log (numbers_1);
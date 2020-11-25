"use strict"


// Практика по циклам 1
// exercise_1 Заменить отрицательные элементы массива на противоположные по знаку

// let numbers = [1, -2, "четыре", -5, 6, 7, -125];
// console.log (numbers);
// for (let i = 0; i <numbers.length; i++){

//   if (numbers[i]<0){
//     numbers.splice(i, 1, Math.abs(numbers[i]));
//   } else {
//     continue;
//   }
// }
// console.log (numbers);

// exercise_2 Если элемент четный, то прибавить к нему первый, если нечетный - последний
//элемент массива. 1й и последний элементы не изменять.

// let numbers_1 = [1, -2, 4, -5, 6, 7, -125];
// let firstElem = numbers_1[0];
// let lastElem = numbers_1[numbers_1.length-1];

// console.log (numbers_1);
// for (let i = 1; i < (numbers_1.length - 1); i++){

//   if (numbers_1[i]%2 == 0){
//     numbers_1[i]=numbers_1[0]+firstElem;
//   } else {
//     numbers_1[i]=numbers_1[i]+lastElem;
//   }
// }
// console.log (numbers_1);

// exercise_3 Даны два целочисленных массива, состоящие из одинакового количества
// элементов. Получить третий массив той же размерности, каждый элемент
// которого равен наибольшему из соответствующих элементов данного массива

// let array_1 = [1, 2, 4, 5, 6, 7, 125];
// let array_2 = [5, 4, 6, 4, 1, 59, 58];
// let arrayFinish = [];
// for (var i=0 ; i<(array_1.length); i++){
//     if (array_1[i] < array_2[i]){
//         arrayFinish.push(array_2[i]);
//     } else {
//         arrayFinish.push(array_1[i]);
//     }
// }
// console.log (arrayFinish)

// exercise_4 Найти максимальный по модулю элемент массива.

// var array = [100, -600, -700, -101, 12510, 1516];

// for (let i = 0; i <array.length; i++){
//   if (array[i]<0){
//     array.splice(i, 1, Math.abs(array[i]));
//   } else {
//     continue;
//   }
// }
// var maxArray = Math.max.apply(null, array);
// console.log(maxArray)

// exercise_5 Найти среднее арифметическое значение элементов массива.

// var array = [100, 600, 700, 101, 12510, 1516];
// for (let i = 0; i <array.length-1; i++){
//     var x = array[i]+array[i+1];
// }
// var midMath = x/array.length;
// console.log(midMath);

// exercise_6 Изменить знак у максимального по модулю элемента массива.

// var array = [100, 600, 700, 1001, -12501, 15010];

// var array1 = array.slice();
// for (let i = 0; i <array.length; i++){
//   if (array[i]<0){
//     array.splice(i, 1, Math.abs(array[i]));
//   } else {
//     continue;
//   }
// }

// var maxArray = Math.max.apply(null, array);
// var change = maxArray.toString()

// for (let i = 0; i <array.length; i++){
//     if (array[i] == maxArray){
//         var key = i;
//     }
// }

// if (array1[key] < 0){
//     array1.splice(key, 1,maxArray);
//     console.log (array1)
// } else {
//     array1.splice(key, 1,-change);
//     console.log (array1)
// }

//exercise_7. Все четные элементы возвести в квадрат, нечетные - удвоить

// var array = [100, 600, 700, 1001, 12501, 15010];
// for (let i = 0; i <array.length; i++){
//   if (array[i]%2 == 0){
//       var key = i;
//       var x = array[i]*array[i];
//       array.splice(key, 1,x);
//   } 
//   else if (array[i]%2 != 0){
//     var key = i;
//     var y = array[i]*2;
//     array.splice(key, 1,y);
//   }
// }
// console.log (array)

//exercise_8 Удалить из массива последний максимальный элемент (если их несколько)

// var array = [100, 1001, 700, 100, 1001, 150];
// var maxArray = Math.max.apply(null, array)
// for (let i = 0; i <array.length; i++){
//     if (array[i] == maxArray){
//         var key = i;
//     }
// }
// array.splice(key, 1,)
// console.log(array)

//exercise_9 Удалить из массива все элементы с цифрой 5

// var array = [100, 600, 5, 1001, 5, 150];

// for (let i = 0; i <array.length; i++){
//   if (array[i] == 5){
//     var key = i;
//     array.splice(key, 1)
//   }
// }

// console.log(array);

//exercise_10 Удалить из массива все нечетные элементы стоящие на четных местах

//var array = [100, 600, 5, 1001, 5, 15];

// for (let i = 1; i < array.length; i=i+2){
//   if (array[i]%2 != 0){
//     var key = i;
//     array.splice(key, 1, "Delite")
//   }
//   continue;
// }
// console.log(array);

//11. Переставить в массиве первые 3 и последние 3 элемента местами, сохраняя их
//последовательность

// var array = [100, 600, 5, 1001, 5, 15, 100, 150];

// for (let i = 0; i <array.length; i++){
//   if (array[i]){
//     var key = i;
//     var key1 = i-1;
//     var key2 = i-2;
//     var mean = array[i]
//     var mean1 = array[i-1]
//     var mean2 = array[i-2]
//   }
// }
// array.splice(key, 1, array[2])
// array.splice(key1, 1, array[1])
// array.splice(key2, 1, array[0])
// array.splice(0, 1, mean2)
// array.splice(1, 1, mean1)
// array.splice(2, 1, mean)
// console.log(array)

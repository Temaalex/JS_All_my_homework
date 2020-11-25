"use strict"


// Практика по циклам 1
// exercise_1 Геометрическая прогрессия

// var startNumber = 1;
// var multiplier = 4;
// var quantity = 7;

// for (let i = 1; i <= quantity; i++)
// {
//   console.log(startNumber);
//   startNumber = startNumber*multiplier;
// }

// exercise_2 Проверка ввода

// do{
//     var number = prompt ('ввести число, большее 100');
// }
// while(number < 101){
//     alert ('Ура');
// }

// exercise_3 Сумма чисел

// var lastNumber = 5;
// var sum = 0;

// for (let i = 0; i <= lastNumber; i++){
//   sum = sum+i;
// }
// console.log(sum);

// exercise_4 Произведение чётных

// var lastNumber = 10;
// let sum = 1;

// for (let i = 1; i <= lastNumber; i=i+2){
//   sum = i*sum;
// }
// console.log(sum);




// Практика по циклам 2
// exercise_1 дано целое число. Определить, является ли оно палиндромом (222, 2112, 0440)

// var a = [0,4,5,0];//массив

// console.log(a[0])// получение первого значения

// console.log(a[a.length - 1])// получение последнего значения

// console.log(a.length);// получение длины числа

// //Решение
// for (var i=0; i<=a.length ;i++){
//     if (a[i] != a[a.length - i-1]){
//         console.log("число не является палиндромом");
//         break;
//     }
// }
// if (a[i] == a[a.length - i-1]){
//     console.log("число является палиндромом");
// }

// exercise_2 даны 2 числа n и k. Из чисел от n до k выбрать те, запись которых содержит ровно 3 одинаковые цифры.
// Например: 6766, 5444, 0006, 0060.

// var n = 8000;
// var k = 9999;
// if (n<1000){
//     for (n ; n<1000; n++){
//         if (n%111 == 0){
//             console.log(n);
//         }
//     }
// }
//     for (n; n<k; n++){
//         var a=n.toString();
//         if (a[0] == a[1] && a[0] == a[2] && a[0] != a[3]){
//             console.log(a);
//         } 
//         else if (a[0] == a[2] && a[0] == a[3] && a[0] != a[1]){
//             console.log(a);
//         }
//         else if (a[0] == a[1] && a[0] != a[2] && a[0] == a[3]){
//             console.log(a);
//         } 
//         else if (a[0] != a[1] && a[1] == a[2] && a[1] == a[3]){
//             console.log(a);
//         } 
//         else if (a[0] != a[1] && a[0] == a[2] && a[0] != a[0]){
//             console.log(a);
//         } 
//     }

// exercise_3 определить количество трехзначных натуральных чисел, сумма цифр которых равна заданному числу number

// var number = 3;
// var x = 899;
// for (var i=0; i<=number; i++){
//     var y= x*number;
// }
// console.log(y);

// exercise_4 среди двузначных чисел найти те, сумма чисел которых делится на 13

// for (var z = 10; z<=90; z=z+10){
//     for (var i=10; i<99; i++){
//         var x = z+i;
//         if (x%13 == 0){
//             console.log(z +" + "+ i +" can " + "/13")
//         }
//     }
// }


// exercise_5 
//Натуральное число из n цифр является числом Армстронга, если сумма его
//цифр, возведенных в n-ную степень, равна самому числу: 153=13+53+33
//Получить все такие числа, состоящие из 3х или 4х цифр

// for (var a = 100; a<=9999; a++){
//     var number=a.toString()

//     if (number.length == 3){
//         var x = Math.pow((number[0]), 3)+Math.pow((number[1]), 3)+Math.pow((number[2]), 3);
//     }
//     if (number.length == 4){
//         var x = Math.pow(number[0], 4) + Math.pow(number[1], 4) + Math.pow(number[2], 4)+Math.pow(number[3], 4);
//     }
//     if (a==x){
//         console.log(x+" - является числом Армстронга.")
//     }
// }

// exercise_6 Выяснить, является ли последовательность цифр числа при просмотре их
// справа налево возрастающей последовательностью. Например: 76521 - да,
// 6331, 9896 - нет (Надо доработать)

// var a = 76522;
// var number = a.toString();
// for (var i = 0; i<(number.length-1); i++){
//     if (number[i] > number[i+1]){
//         console.log("Yes");
//     } else {
//         console.log("No");
//     }
// }

// exercise_7 Выяснить, является ли разность максимальной и минимальной цифр числа
// четной. Например: 1234 - максимальная цифра 4, минимальная 1, 4-1=3 -
// нечетное, не является.

// var a = 6232;
// var number = a.toString();
// var firstNumber = number[0];
// var lastNumber = number[number.length - 1];

// if (firstNumber <= lastNumber ){
//     var sumFirstAndLast = Number(lastNumber)-Number(firstNumber);
//     if (sumFirstAndLast%2 == 0){
//         console.log("разность максимальной и минимальной цифры "+ a + " четная")
//     } else {
//         console.log("разность максимальной и минимальной цифры "+ a + " нечетная")
//     }
// }
// else if (firstNumber > lastNumber){
//     var sumFirstAndLast = Number(firstNumber)-Number(lastNumber);
//     if (sumFirstAndLast%2 == 0){
//         console.log("разность максимальной и минимальной цифры "+ a + " четная")
//     } else {
//         console.log("разность максимальной и минимальной цифры "+ a + " нечетная")
//     }
// }
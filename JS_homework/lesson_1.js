"use strict"

/*exercise 1*/

// var number = +prompt("Введите цифру!");
// var fizz = number%3;
// var buzz = number%5;

// console.log (fizz);
// console.log (buzz);
// console.log (typeof number);
// console.log (typeof fizz);
// console.log (typeof buzz);

//     if ((fizz == 0)&&(buzz != 0)){
//         alert("fizz");
//     }
//     else if ((fizz != 0)&&(buzz == 0)){
//         alert("buzz");
//     }
//     else if ((fizz == 0)&&(buzz == 0)){
//         alert("fizzBuzz");
//     }

/*exercise 2*/

// var buy = +prompt("Введите стоимость!");

// console.log (typeof buy);

// if (buy >= 1000 && buy < 3000){
//     alert("Ваша скидка составляет 5%," + " стоимость вашего товара с учетом скидки составлет " + buy*0.95 + "$");

// }
// else if (buy >= 3000 && buy < 5000){
//     alert("Ваша скидка составляет 10%," + " стоимость вашего товара с учетом скидки составлет " + buy*0.9 + "$");
// }
// else if (buy >= 5000){
//     alert("Ваша скидка составляет 15%," + " стоимость вашего товара с учетом скидки составлет " + buy*0.85 + "$");
// }
// else {
//     alert("Cкидки нет");
// }

/*exercise 3*/

// var now = new Date();
// var time = now.getHours();
// alert("Текущее время " + time + " часов");

// if (time >= 8 && time < 13 || time >= 14 && time <= 19){
//     alert("Молокозавод находится ближе всех");
// }
// else if (time >= 9 && time < 14 || time >= 15 && time <= 17){
//     alert("Магазин находится ближе всех");
// }
// else if (time >= 7 && time <= 20){
//     alert("Рынок находится ближе всех");
// }
// else{
//     alert("Нам очень жаль, но все места закрыты.");
// }
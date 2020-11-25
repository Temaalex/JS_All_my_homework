"use strict"

/*exercise 1 about bicycle parking*/

// function parking (a,b){
//     if((a==2)&&(b<100)){
//       alert('Парковка разрешена');
//     }
//     else{
//       alert('парковка запрещена');
//     }
//   }
  
//   function chackNumber(inputData){
//   let status = Number(inputData) ?  true : false ;
//     return status;
//   }

//   var a = prompt ("Введите количество колес");
//   var b = prompt("Введите массу");

//   if(chackNumber(a) && chackNumber(b)){
//     parking (a,b);
//     } else {
//     alert("Введите число!");
//     }

/*exercise 2 about cost*/

// function getPrice(time, a)
// {
//     var rate = 1500;
    
//     if(a==true){
//       time = time/2;
//       rate = rate*2.5;
//     }
//     if (a==true && time>150){
//       rate = rate - 250;
//     }
//       return rate*time;
// }
// console.log(getPrice(200,true));
// console.log(getPrice(150,false));
// console.log(getPrice(100,true));
// console.log(getPrice(150,true));
// console.log(getPrice(320,true));
// console.log(getPrice(320,false));

/*exercise 3 about pressure at depth*/

// function calculatePressure(pressure, density){
//   var calculate = pressure*9.8*density;
//   return Math.round(calculate);
// };
// console.log(calculatePressure(1000,5));
// console.log(calculatePressure(1030,3));
// console.log(calculatePressure(1028,2));
// console.log(calculatePressure(926,1));

/*exercise 4 about calculate*/

// var firstNumber = prompt ("Введите firstNumber");
// var operator = prompt ("Введите operator [+, -, /, *]");
// var secondNumber = prompt ("Введите secondNumber");

// function calculate (firstNumber, secondNumber, operator){
//   if (Number(firstNumber) && Number(secondNumber) && operator == "*")
//   {
//     calculate = firstNumber*secondNumber;
//     alert(calculate);
//   }
//   else if (Number(firstNumber) && Number(secondNumber) && operator == "/"){
//     calculate = firstNumber/secondNumber;
//     alert(calculate);
//   }
//   else if (Number(firstNumber) && Number(secondNumber) && operator == "+"){
//     calculate = Number(firstNumber) + Number(secondNumber);
//     alert(calculate);
//   }
//   else if (Number(firstNumber) && Number(secondNumber) && operator == "-"){
//     calculate = firstNumber-secondNumber;
//     alert(calculate);
//   }
//   else if ((operator != "*" || "/" || "+" || "-") && (Number(firstNumber) != Number)&& (Number(secondNumber)!= Number)){
//     alert("Не верные данные");
//   }  
// };

/*exercise 5 about Как ты мне дорог*/

// function calculateExpenses(netSalary, incomeTax, contributions){
//     if (Number(netSalary) && Number(incomeTax) && Number(contributions)){
//     var salary = ((netSalary/100)*incomeTax)+Number(netSalary);
//     var dirty = ((netSalary/100)*contributions)+Number(netSalary);
//     } else {
//         alert ("Вы опечатались");
//     }
// }
// var netSalary = prompt ("Введите зарплату сотрудника");
// var incomeTax = prompt ("Введите НДФЛ в процентах %");
// var contributions = prompt ("Введите дополнительные взносы в процентах %");
// alert ("Зарплата сотрудника: "+ netSalary +" Рублей."+" С учетом НДФЛ " + incomeTax + " % " + "и различных взносов в размере " + contributions + " %. " +
//     "Общая затрата на сотрудника составляет "+calculateExpenses(netSalary, incomeTax, contributions)+" Рублей");

/*exercise 6 about программа-календарь*/

// function getDayOfWeek (dayOfWeek, amountOfDays){

// if (dayOfWeek == 'понедельник'){
//     if (amountOfDays == 1 || amountOfDays == 8 || amountOfDays == 15 || amountOfDays == 22 || amountOfDays == 29){
//        alert ('понедельник');
//     } else if (amountOfDays == 2 || amountOfDays == 9 || amountOfDays == 16 || amountOfDays == 23 || amountOfDays == 30){
//         alert ('вторник');
//     } else if (amountOfDays == 3 || amountOfDays == 10 || amountOfDays == 17 || amountOfDays == 24 ){
//         alert ('среда');
//     } else if (amountOfDays == 4 || amountOfDays == 11 || amountOfDays == 18 || amountOfDays == 25 ){
//         alert ('четверг');
//     } else if (amountOfDays == 5 || amountOfDays == 12 || amountOfDays == 19 || amountOfDays == 26 ){
//         alert ('пятница');
//     } else if (amountOfDays == 6 || amountOfDays == 13 || amountOfDays == 20 || amountOfDays == 27 ){
//         alert ('суббота');
//     } else if (amountOfDays == 7 || amountOfDays == 14 || amountOfDays == 21 || amountOfDays == 28 ){
//         alert ('воскресение');
// }
// }
// if (dayOfWeek == 'вторник'){
//     if (amountOfDays == 1 || amountOfDays == 8 || amountOfDays == 15 || amountOfDays == 22 || amountOfDays == 29){
//        alert ('вторник');
//     } else if (amountOfDays == 2 || amountOfDays == 9 || amountOfDays == 16 || amountOfDays == 23 || amountOfDays == 30){
//         alert ('среда');
//     } else if (amountOfDays == 3 || amountOfDays == 10 || amountOfDays == 17 || amountOfDays == 24 ){
//         alert ('четверг');
//     } else if (amountOfDays == 4 || amountOfDays == 11 || amountOfDays == 18 || amountOfDays == 25 ){
//         alert ('пятница');
//     } else if (amountOfDays == 5 || amountOfDays == 12 || amountOfDays == 19 || amountOfDays == 26 ){
//         alert ('суббота');
//     } else if (amountOfDays == 6 || amountOfDays == 13 || amountOfDays == 20 || amountOfDays == 27 ){
//         alert ('воскресение');
//     } else if (amountOfDays == 7 || amountOfDays == 14 || amountOfDays == 21 || amountOfDays == 28 ){
//         alert ('понедельник');
// }
// }
// if (dayOfWeek == 'среда'){
//     if (amountOfDays == 1 || amountOfDays == 8 || amountOfDays == 15 || amountOfDays == 22 || amountOfDays == 29){
//        alert ('среда');
//     } else if (amountOfDays == 2 || amountOfDays == 9 || amountOfDays == 16 || amountOfDays == 23 || amountOfDays == 30){
//         alert ('четверг');
//     } else if (amountOfDays == 3 || amountOfDays == 10 || amountOfDays == 17 || amountOfDays == 24 ){
//         alert ('пятница');
//     } else if (amountOfDays == 4 || amountOfDays == 11 || amountOfDays == 18 || amountOfDays == 25 ){
//         alert ('суббота');
//     } else if (amountOfDays == 5 || amountOfDays == 12 || amountOfDays == 19 || amountOfDays == 26 ){
//         alert ('воскресение');
//     } else if (amountOfDays == 6 || amountOfDays == 13 || amountOfDays == 20 || amountOfDays == 27 ){
//         alert ('понедельник');
//     } else if (amountOfDays == 7 || amountOfDays == 14 || amountOfDays == 21 || amountOfDays == 28 ){
//         alert ('вторник');
// }
// }
// if (dayOfWeek == 'четверг'){
//     if (amountOfDays == 1 || amountOfDays == 8 || amountOfDays == 15 || amountOfDays == 22 || amountOfDays == 29){
//        alert ('четверг');
//     } else if (amountOfDays == 2 || amountOfDays == 9 || amountOfDays == 16 || amountOfDays == 23 || amountOfDays == 30){
//         alert ('пятница');
//     } else if (amountOfDays == 3 || amountOfDays == 10 || amountOfDays == 17 || amountOfDays == 24 ){
//         alert ('суббота');
//     } else if (amountOfDays == 4 || amountOfDays == 11 || amountOfDays == 18 || amountOfDays == 25 ){
//         alert ('воскресение');
//     } else if (amountOfDays == 5 || amountOfDays == 12 || amountOfDays == 19 || amountOfDays == 26 ){
//         alert ('понедельник');
//     } else if (amountOfDays == 6 || amountOfDays == 13 || amountOfDays == 20 || amountOfDays == 27 ){
//         alert ('вторник');
//     } else if (amountOfDays == 7 || amountOfDays == 14 || amountOfDays == 21 || amountOfDays == 28 ){
//         alert ('среда');
// }
// }
// if (dayOfWeek == 'пятница'){
//     if (amountOfDays == 1 || amountOfDays == 8 || amountOfDays == 15 || amountOfDays == 22 || amountOfDays == 29){
//        alert ('пятница');
//     } else if (amountOfDays == 2 || amountOfDays == 9 || amountOfDays == 16 || amountOfDays == 23 || amountOfDays == 30){
//         alert ('суббота');
//     } else if (amountOfDays == 3 || amountOfDays == 10 || amountOfDays == 17 || amountOfDays == 24 ){
//         alert ('воскресение');
//     } else if (amountOfDays == 4 || amountOfDays == 11 || amountOfDays == 18 || amountOfDays == 25 ){
//         alert ('понедельник');
//     } else if (amountOfDays == 5 || amountOfDays == 12 || amountOfDays == 19 || amountOfDays == 26 ){
//         alert ('вторник');
//     } else if (amountOfDays == 6 || amountOfDays == 13 || amountOfDays == 20 || amountOfDays == 27 ){
//         alert ('среда');
//     } else if (amountOfDays == 7 || amountOfDays == 14 || amountOfDays == 21 || amountOfDays == 28 ){
//         alert ('четверг');
// }
// }
// if (dayOfWeek == 'суббота'){
//     if (amountOfDays == 1 || amountOfDays == 8 || amountOfDays == 15 || amountOfDays == 22 || amountOfDays == 29){
//        alert ('суббота');
//     } else if (amountOfDays == 2 || amountOfDays == 9 || amountOfDays == 16 || amountOfDays == 23 || amountOfDays == 30){
//         alert ('воскресение');
//     } else if (amountOfDays == 3 || amountOfDays == 10 || amountOfDays == 17 || amountOfDays == 24 ){
//         alert ('понедельник');
//     } else if (amountOfDays == 4 || amountOfDays == 11 || amountOfDays == 18 || amountOfDays == 25 ){
//         alert ('вторник');
//     } else if (amountOfDays == 5 || amountOfDays == 12 || amountOfDays == 19 || amountOfDays == 26 ){
//         alert ('среда');
//     } else if (amountOfDays == 6 || amountOfDays == 13 || amountOfDays == 20 || amountOfDays == 27 ){
//         alert ('четверг');
//     } else if (amountOfDays == 7 || amountOfDays == 14 || amountOfDays == 21 || amountOfDays == 28 ){
//         alert ('пятница');
// }
// }
// if (dayOfWeek == 'воскресение'){
//     if (amountOfDays == 1 || amountOfDays == 8 || amountOfDays == 15 || amountOfDays == 22 || amountOfDays == 29){
//        alert ('воскресение');
//     } else if (amountOfDays == 2 || amountOfDays == 9 || amountOfDays == 16 || amountOfDays == 23 || amountOfDays == 30){
//         alert ('понедельник');
//     } else if (amountOfDays == 3 || amountOfDays == 10 || amountOfDays == 17 || amountOfDays == 24 ){
//         alert ('вторник');
//     } else if (amountOfDays == 4 || amountOfDays == 11 || amountOfDays == 18 || amountOfDays == 25 ){
//         alert ('среда');
//     } else if (amountOfDays == 5 || amountOfDays == 12 || amountOfDays == 19 || amountOfDays == 26 ){
//         alert ('четверг');
//     } else if (amountOfDays == 6 || amountOfDays == 13 || amountOfDays == 20 || amountOfDays == 27 ){
//         alert ('пятница');
//     } else if (amountOfDays == 7 || amountOfDays == 14 || amountOfDays == 21 || amountOfDays == 28 ){
//         alert ('суббота');
//     }    
// }
// }
// var dayOfWeek = prompt ("Введите день недели на который выпадает первое число месяца в формате, : " + "понедельник, вторник, среда, четверг, пятница, суббота, воскресение");
// var amountOfDays = prompt ("Введите количество дней для которого нужно найти день недели");
// getDayOfWeek (dayOfWeek, amountOfDays);


/*exercise 7 about Деньги к деньгам*/

// function calculateDeposit (start, percent, month, capitalization){
//     if (capitalization == false || percent == 0){
//     var status = (start/100)*((percent/12)*month)+start;
//     return Math.floor(status);
//     } else {
//         for (var i = 0; i <= month; i++ ) {
//             var stat = ((start)/100)*(percent/12);
//             if (i < month){
//             var start = start+stat;
//         }
//     }
//     return Math.floor(start);
//     }
// }
    
// console.log(calculateDeposit(100000 ,12, 1, false)); //101000 рублей.
// console.log(calculateDeposit(100000 ,12, 1, true)); //101000 рублей.
// console.log(calculateDeposit(100000 ,10, 2, false)); //101666  рублей.
// console.log(calculateDeposit(100000 ,10, 2, true)); //101673 рублей.
// console.log(calculateDeposit(200000 ,6.8, 6, false)); //206800 рублей.
// console.log(calculateDeposit(200000 ,0, 6, true)); //200000 рублей. 

/*exercise 8 about Вечный вопрос*/

// function calculate_1 (start, month, percent){
//     var status = (start/100)*((percent/12)*month)+start;
//     return Math.floor(status);
// }
// function calculate_2 (start, month, capitalization){    
//     for (var i = 0; i <= month; i++ ) {
//         var stat = ((start)/100)*(capitalization/12);
//             if (i < month){
//                 var start = start+stat;
//             }
//         }
//     return Math.floor(start);
// }
// function getProfitableDeposit(start, month, percent, capitalization){
//     if (Number(start) && Number(month) && Number(percent) && Number(capitalization)){
//         if (calculate_1 (start, month, percent) > calculate_2 (start, month, capitalization)){
//             var income_1 = calculate_1 (start, month, percent)-start;
//             alert ('Выбирай обычный вклад. Заработаешь ' + income_1);
//         } else {
//             var income_2 = calculate_2 (start, month, capitalization)-start;
//             alert ('Выбирай капитализацию. Заработаешь ' + income_2);
//         } 
//     } else {
//         alert ('Данные некорректны, попробуйте снова');        
//     }
// }
// var start = +prompt ('Введите исходный размер депозита');
// var month = +prompt ('Введите срок депозита в месяцах');
// var percent = +prompt ('Введите процентную ставку для депозита с простыми процентами');
// var capitalization = +prompt ('Введите процентную ставку для депозита с капитализацией процентов');
// getProfitableDeposit(start, month, percent, capitalization);

/* Тестирование*/

// console.log(getProfitableDeposit(10000 ,9, 7, 6.8)); //10525 рублей.
// console.log(getProfitableDeposit(300000 ,18, 7.2, 6)); //332400 рублей.
// console.log(getProfitableDeposit(250000 ,14, 7, 6.8)); //27580  рублей.
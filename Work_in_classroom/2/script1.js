"use strict"
/*work 1*/
var time = 3;
let speedOne = 12;
let speedTwo = 14;
const GRAVITY = 9.8;
let distance;

var hello = "33";
var goodbye = "44";

console.log(hello+goodbye);
console.log(GRAVITY);
console.log(speedOne);

speedOne = 10;
console.log(speedOne);
    
    distance = speedOne*time + speedTwo*time;

console.log(distance);
console.log("При скорости велосипедиста 1" + speedOne + "км/ч и скорости велосипидиста 2"
+ speedTwo + "км/ч за время " + time + " часов пройденое расстояние равно:"+
distance + "км");

/*перевод в строку и числа*/
var x = distance + '';
console.log(x);
console.log(+x);
//проверка типов
console.log(typeof x); 
console.log(typeof +x);
console.log(typeof folse);

//инкр
var i=1;
console.log(i++);
console.log(i);

var j=1;
console.log(++j);
console.log(j);

// if else
var age=15;
var status;
if(age>=18){
  status="adult";
  console.log(status);
}
else{
  status = "kid";
  console.log(status);
}
var status = (age >= 18) ? "adult" : "kid";
console.log(status);


console.log("-----------");
//пример
var a = 10;
var b = 2;
var c = 3;

/*if(a>b){
if(a>c){
console.log(a);
}
else{
console.log(a);
}
} else {
if(b>c){
console.log(b);
}
else{
console.log(c);
}
}
console.log("-----------");

//or, and
if ((a>c)&&(a>b))
{
console.log(a);
}*/
console.log("-----------");
//alert('я текст') вывод пользователю
//var y = prompt('введите y:')
//console.log(+y);
//or, and
if ((a>c)&&(a>b))
{
console.log(a);
}
//пример
//var a = prompt('введите a:')
//var b = prompt('введите b:')
//var c = prompt('введите c:')

/*if(a>b){
if(a>c){
alert(a);
}
else{
alert(a);
}
} else {
if(b>c){
alert(b);
}
else{
alert(c);
}
}*/
console.log("-----------");

var rain=confirm('Is it rain?')
if(rain==true){
alert("Не ходи гулять");
}
else{
var t1 = prompt("введите t°");
  if((t1>=10)&&(t1<15)){
  alert("Иди гулять 30 минут");
  }
  else if((t1>=15)&&(t1<25)){
  alert("Иди гулять 40 минут");
  }
  else if((t1>=25)&&(t1<=35)){
  alert("Иди гулять 20 минут");
  }
  else if((t1<10)||(t1>35)){
  alert("Не ходи гулять");
  }
  else if((typeof +t1) != Number){
  alert("Введите число!");
  }
  }
  
/*work 2*/


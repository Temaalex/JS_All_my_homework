"use strict"


var sum = function(a,b){
  return a+b;
};

var result = sum(1,2);

console.log(result);

var getExpretion = function (a,b,c){

  var d = b*b-4*a*c;

  if (d<0){
    alert('Error')
  }  else {

    var x1,x2;
    x1=(-b+Math.sqrt(d))/2*a;
    x2=(-b-Math.sqrt(d))/2*a;

    alert('Root first: '+ x1 +' Root second: ' + x2);
  }
}

//getExpretion (1,2,1);



function showMessage(name){
  alert('Hello,'+ name + "!");
}

//showMessage("Tema");

var name = "Tema1"

//showMessage(name);

function calculateSalary(dirtySalary){
  if (dirtySalary<100000){
    return dirtySalary *0.35;
  } else {
    return dirtySalary *0.45;
  }

}
var salary = 10000;
console.log(calculateSalary(salary));
console.log(calculateSalary());//NaN
console.log(calculateSalary);//Вызывает саму функцию

function parking (a,b){
  if((a==2)&&(b<100)){
    alert('Парковка разрешена');
  }
  else{
    alert('парковка запрещена');
  }
}

function chackNumber(inputData){
     let status = typeof +inputData == Number ? false : true ;
     return status;
}

console.log(chackNumber())

//var a = prompt("Введите количество колес");
//var b = prompt("Введите массу");
//parking (a,b);
//parking (prompt("Введите количество колес"),prompt("Введите массу"))
/*if (chackNumber(a) && chackNumber(b))
{
  parking(a,b);
} else {
  alert("Это не числа!");
}*/

function getPrice(time, a)
{
    var rate = 1500;
    
    if(a==true){
      time = time/2;
      rate = rate*2.5;
    }
    if (a==true && time>150){
      rate = rate - 250;
    }
      return rate*time;
}
console.log(getPrice(200,true));
console.log(getPrice(150,false));
console.log(getPrice(100,true));
console.log(getPrice(150,true));
console.log(getPrice(320,true));
console.log(getPrice(320,false));
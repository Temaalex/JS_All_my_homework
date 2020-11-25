"use strict"

let user = {
  name: 'Сергей', 
  age: 28,
};

console.log(user);
console.log(user.name);
console.log(user['age']);

user.position = "Директор";//Добавление нового ключа и значения
console.log(user);

user.name = "Владимир";// Замена значения в ключе
console.log(user);

user.age = user.age+1;// Замена значения в ключе
console.log(user);


//Передача по ссылки (Копирование объекта)
let user2 = user;//Добавили User
console.log(user2);
user.name = "Юрий";//Замена значения в ключе
console.log(user2);


//Задачи
var book = {
  name: 'Программирование на Javascript', 
  type: 'book',  
}
console.log(book);

let something = {
  name:  'Garphield',
  likes: "milk",
};
let something2 = {
  name:  'garphield',
  likes: "Milk",
};
let something3 = {
  name:  'Garphield',
  likes: "Milk",
};

function isACat(cat){
  if(cat.name ==='Garphield' || cat.likes ==='milk' ){
    return true;
  } else{
    return false;
  }
}
console.log (isACat(something))
console.log (isACat(something2))
console.log (isACat(something3))

//Свойства и методы

let man = {
  name: "Максим",
  age: 18,
  sayHello: function(){
    console.log ("Привем меня завут " +  this.name + " и мне " + this.age + "лет" )
  }
}
man.sayHello ()
//console.log() //апналогия с man.sayHello ()


//Задача

let userName = "Pete";
let userAge = 5;

function getUser (name, age){
  let man = {
    name:  name,
    age: age,
    sayHello: function(){
      console.log ("Привет, я " +  this.name + " ,мне " + this.age + " лет." )
      }
  }
return man;
}

let userMan = getUser (userName, userAge);
console.log(userMan);
userMan.sayHello();

// дано
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
  };

function multiplyNumeric(obj){
  for (let key in obj){
    console.log(key);
    console.log(obj[key]);
    if (Number(obj[key])){
      obj[key]=obj[key]*2;
  }
}
}
multiplyNumeric(menu)
console.log(menu)

//Ассоциативный массив 

var catsFavoriteFood = {
  Кекс: 'рыба',
  Рудольф: 'котлета',
  Снежок: 'сметана'
  };
  var printFavoriteFood = function (name) {
  return 'Моя любимая еда — ' + catsFavoriteFood[name];
  };

  console.log(printFavoriteFood('Снежок')); // Выведет: Моя любимая еда — сметана


  // var processorPrice = {
  //   i5: 5000,
  //   i7: 10000,  
  // }
  // var displayPrice = {
  //   '13 дюймов': 5000,
  //   '15 дюймов': 10000,
  // }
  // var memoryPrice = {
  //   '8 Гб': 3000,
  //   '16 Гб': 7000,
  // }
 
  // console.log (displayPrice['15 дюймов']);
  // console.log (memoryPrice['8 Гб']);
  // console.log (processorPrice['i7']);
  // var x = prompt ("Введите дисплей");
  // var y = prompt ("Введите память");
  // var z = prompt ("Введите процессор");

  // var userDisplay = displayPrice[x];
  // var userMemory = memoryPrice[y];
  // var userProcessor = processorPrice[z];
  // var cast = userDisplay+userMemory+userProcessor;
  
  
  //console.log ("Стоимость ПК с " + x + " c "  + y +  " и c " + z + " равна " + cast)
   
// удаление delite menu2.title

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
  }
  function sal(obj){
    for (let key in obj){
       console.log(obj[key]+obj[key]+obj[key]);
    }
  }
 sal(salaries);
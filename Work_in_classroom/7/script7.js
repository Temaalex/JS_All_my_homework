'use strict';
//Обработчик событий поля ввода input
let loginField = document.querySelector('.login-field');
let userText = document.querySelector('.user-text');

loginField.addEventListener('input',  function () {
  //console.log(loginField.value);
  userText.textContent = loginField.value;
  });
  

//Задача 1 “Подсчет зарплаты”

let salaryField =document.querySelector('.salary-field');
let salary =document.querySelector('.salary');


salaryField.addEventListener('input', function(){
  let salarysum = 0;
  if (salaryField.value < 100000){
    salarysum = salaryField.value - salaryField.value*0.35;
  } else {
    salarysum = salaryField.value - salaryField.value*0.45;
  }
  console.log(salarysum)
  salary.textContent = salarysum;
});
//--------------------


//Обработчик событий change

let ageementField =document.querySelector('.ageement-field');
let submitButton =document.querySelector('.submit-button');

ageementField.addEventListener('change', function () {
  if (ageementField.checked){
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});


//Задача “Расчёт стоимости проекта”

let projectTime = document.querySelector('.project-time');
let projectUrgensy = document.querySelector('.project-urgensy');
let projectResultValue = document.querySelector('.project-result-value');
let rate = 1500;

projectUrgensy.addEventListener('change', function(){
  if(projectUrgensy.checked){
  projectResultValue.textContent = projectTime.value/2*(rate*2.5);
  } else {
  projectResultValue.textContent = projectTime.value*rate;
  }
});

projectTime.addEventListener('input', function(){
  if(projectTime.value > 150){
    projectResultValue.textContent = projectTime.value*(rate-250);
  } else {
    projectResultValue.textContent = projectTime.value*rate;
  }
  
  if(projectUrgensy.checked){
    projectResultValue.textContent = projectTime.value/2*(rate*2.5);
  } else {
    projectResultValue.textContent = projectTime.value*rate;
  }
  //projectUrgensy.checked = false;
});


//Задача: сделать сортировку постов по тематикам

let newsItem = document.querySelectorAll('.news-item');
let filter = document.querySelector('#news-list');

//console.log(filter.value);

filter.addEventListener('change', function(){
  for(let article of newsItem){
    if(article.dataset.category !== filter.value){
      article.classList.add('hidden');
    } else {
      article.classList.remove('hidden');
    }

    if (filter.value === "all"){
      article.classList.remove('hidden');
    }
  }
});

//Задача “Список дел”

let todoList = document.querySelector('.todo-list');
let todoTemplate = document.querySelector('#todo').content;
let newli = todoTemplate.querySelector('.todo-item');
let todoField = document.querySelector('.todo-field');
let todoBtn = document.querySelector('.todo-btn');

console.log(todoTemplate);

todoBtn.onclick = function(evt){
  evt.preventDefault();

  let newElement = newli.cloneNode();
  newElement.textContent = todoField.value;
  todoList.appendChild(newElement);

  todoField.value='';
};


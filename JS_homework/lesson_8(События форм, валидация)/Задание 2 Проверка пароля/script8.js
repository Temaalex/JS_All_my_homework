'use strict';

let password = document.querySelector('.password');
let login = document.querySelector('.login');
let checkbox = document.querySelector('#checkbox');
let easy = document.querySelector('.easy');
let normal = document.querySelector('.normal');
let hard = document.querySelector('.hard');

password.oninput = function(){
    
    if (password.value.length<5){
        easy.style.backgroundColor = "red";
        normal.style.backgroundColor = "white";
        hard.style.backgroundColor = "white";
    }
    if (password.value.length>=5 && password.value.length<8){
        easy.style.backgroundColor = "yellow";
        normal.style.backgroundColor = "yellow";
        hard.style.backgroundColor = "white";
    }
    if (password.value.length>=8){
        easy.style.backgroundColor = "green";
        normal.style.backgroundColor = "green";
        hard.style.backgroundColor = "green";
    }
}

checkbox.onchange = function(){
    if (checkbox.checked){
        password.type = 'text';
    } else {
        password.type = 'password';
    }

}
'use strict';
let kg = document.querySelector('#kg');
let km = document.querySelector('#km');
let unloading = document.querySelector('#unloading');
let deliveryToDoor = document.querySelector('#delivery_to_door');
let fragileCargo = document.querySelector('#fragile_cargo');
let answer = document.querySelector('#answer');
let salary = document.querySelector('.salary');
let click = document.querySelector('.click');
unloading.onchange = function(){
    if (unloading.checked){
        unloading.textContent = 1500;
    } else {
        unloading.textContent = 0;
    }
};
deliveryToDoor.onchange = function(){
    if (deliveryToDoor.checked){
        deliveryToDoor.textContent = 2000;
    } else {
        deliveryToDoor.textContent = 0;
    } 
};
fragileCargo.onchange = function(){
    if (fragileCargo.checked){
        fragileCargo.textContent = 3000;
    } else {
        fragileCargo.textContent = 0;
    }  
};
click.addEventListener('click', function(){
    let x = Number(unloading.textContent);
    let y = Number(deliveryToDoor.textContent);
    let z = Number(fragileCargo.textContent);
    if (km.value>100 && km.value <=200){
        let kgg = kg.value*900;
        salary.textContent = kgg+x+y+z;
    }
    else if (km.value <=100){
        let kgg = kg.value*700;
        salary.textContent = kgg+x+y+z;
    } else {
        salary.textContent = 'Такой доставки нет';
    }
});


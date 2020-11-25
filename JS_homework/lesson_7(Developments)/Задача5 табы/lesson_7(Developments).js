"use strict"

let titleDelivry = document.querySelector('.title_delivry');
let titleWarranty = document.querySelector('.title_warranty');
let titleCredit = document.querySelector('.title_credit');
let textDelivry = document.querySelector('.text_delivry');
let textWarranty = document.querySelector('.text_warranty');
let textCredit = document.querySelector('.text_credit');
let titleOne = document.querySelector('.title_one');
let titleText = document.querySelector('.title_text');

let titleChange = function(){
    titleDelivry.className ='title_delivry';
    textDelivry.className ='text_delivry';

    titleWarranty.className = 'title_warranty';
    textWarranty.className = 'text_warranty';

    titleCredit.className = 'title_credit';
    textCredit.className = 'text_credit';

    titleOne.textContent = "ДОСТАВКА";
    titleText.innerHTML = "Мы с удовольствием доставим ваш товар прямо"+'<br>'+"к вашему подъезду совершенно бесплатно!"+'<br>'+" Ведь мы неплохо заработаем, "+'<br>'+"поднимая его на ваш этаж!";
} 
textDelivry.onclick = titleChange;
titleDelivry.onclick = titleChange;

let titleChange1 = function(){
    titleDelivry.className ='title_warranty';
    textDelivry.className ='text_warranty';

    titleWarranty.className = 'title_delivry';
    textWarranty.className = 'text_delivry';

    titleCredit.className = 'title_credit';
    textCredit.className = 'text_credit';


    titleOne.textContent = "ГАРАНТИЯ";
    titleText.innerHTML = "ЧТООООООО!!!!!!!"+'<br>'+"КАКАЯ ГАРАНТИЯ????"+'<br>'+"У НАС ЕСТЬ ГАРАНТИЯ?????";
} 
titleWarranty.onclick = titleChange1;
textWarranty.onclick = titleChange1;

let titleChange2 = function(){
    titleDelivry.className ='title_credit';
    textDelivry.className ='text_credit';

    titleWarranty.className = 'title_warranty';
    textWarranty.className = 'text_warranty';

    titleCredit.className = 'title_delivry';
    textCredit.className = 'text_delivry';

    titleOne.textContent = "КРЕДИТ";
    titleText.innerHTML = "Наши кредиты самые выгодные, под 15% годовых!";
} 
titleCredit.onclick = titleChange2;
textCredit.onclick = titleChange2;
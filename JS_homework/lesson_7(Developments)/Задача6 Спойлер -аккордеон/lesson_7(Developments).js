"use strict"

let chackbox = document.querySelector('.chackbox');
let radio = document.querySelector('.radio');
let chackboxOpen = document.querySelector('.chackboxOpen');

let we = document.querySelector('.we');
let services = document.querySelector('.services');
let portfolio = document.querySelector('.portfolio');
let contact = document.querySelector('.contact');
let textwe = document.querySelector('.textwe_close');
let textservices = document.querySelector('.textservices_close');
let textportfolio = document.querySelector('.textportfolio_close');
let textcontact = document.querySelector('.textcontact_close');

// Первый этап
let getchackbox = function(){
let getwe = function() {
    textwe.classList.toggle('textwe');
};
we.onclick = getwe;

let getservices = function() {
    textservices.classList.toggle('textservices');
};
services.onclick = getservices;

let getportfolio = function() {
    textportfolio.classList.toggle('textportfolio');
};
portfolio.onclick = getportfolio;

let getcontact = function() {
    textcontact.classList.toggle('textcontact');
};
    contact.onclick = getcontact;
}
// Второй этап
let getradio = function(){
let getwe1 = function() {
    textwe.className = 'textwe';
    textservices.className = 'textservices_close';
    textportfolio.className = 'textportfolio_close';
    textcontact.className = 'textcontact_close';
};
we.onclick = getwe1;
let getservices1 = function() {
    textwe.className = 'textwe_close';
    textservices.className = 'textservices';
    textportfolio.className = 'textportfolio_close';
    textcontact.className = 'textcontact_close';
};
services.onclick = getservices1;

let getportfolio1 = function() {
    textwe.className = 'textwe_close';
    textservices.className = 'textservices_close';
    textportfolio.className = 'textportfolio';
    textcontact.className = 'textcontact_close';
};
portfolio.onclick = getportfolio1;

let getcontact1 = function() {
    textwe.className = 'textwe_close';
    textservices.className = 'textservices_close';
    textportfolio.className = 'textportfolio_close';
    textcontact.className = 'textcontact';
};
contact.onclick = getcontact1;
}
//Этап 3
let getchackboxOpen = function(){
    textwe.className = 'textwe_close';
    textservices.className = 'textservices';
    textportfolio.className = 'textportfolio_close';
    textcontact.className = 'textcontact_close';
    let getwe = function() {
        textwe.classList.toggle('textwe');
    };
    we.onclick = getwe;
    
    let getservices = function() {
        textservices.classList.remove('textservices');
        textservices.classList.toggle('textservices_close');
    };
    services.onclick = getservices;
    
    let getportfolio = function() {
        textportfolio.classList.toggle('textportfolio');
    };
    portfolio.onclick = getportfolio;
    
    let getcontact = function() {
        textcontact.classList.toggle('textcontact');
    };
        contact.onclick = getcontact;
}




chackbox.onclick = getchackbox;
radio.onclick = getradio;
chackboxOpen.onclick = getchackboxOpen;

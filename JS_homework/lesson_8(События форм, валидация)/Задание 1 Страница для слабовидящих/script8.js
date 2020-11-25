'use strict';

let colorsBackground = document.querySelector('.colors-background');
let colorsText = document.querySelector('.colors-text');
let range = document.querySelector('.range');
let text = document.querySelector('.text');

colorsBackground.onchange = function(){text.style.background = colorsBackground.value;};
colorsText.onchange = function(){text.style.color = colorsText.value;};
range.onchange = function(){text.style.fontSize = range.value+'px';};



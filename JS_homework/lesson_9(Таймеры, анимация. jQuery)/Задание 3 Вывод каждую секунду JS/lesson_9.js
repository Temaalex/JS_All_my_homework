"use strict"
let from = document.querySelector('.from');
let to = document.querySelector('.to');
let start = document.querySelector('.start');
let answer = document.querySelector('.answer');

function printNumbers(from, to) {
    let current = from;
      let timerId = setInterval(function() {
        answer.textContent = current;
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  printNumbers(5, 10);
"use strict"
let time = document.querySelector('.time');
let start = document.querySelector('.start');
let stop1 = document.querySelector('.stop');
let reset = document.querySelector('.reset');
start.addEventListener('click', function(){
  let y = Math.round(new Date().getTime()/1000);
    let intervalId = setInterval(function(){
    let x = Math.round(new Date().getTime()/1000);
    let sec = (x-y)%60;
    let min = Math.round(((x-y)%3600)/120);
    time.textContent=  min+":"+sec;
  },1000)
  stop1.addEventListener('click', function(){
    clearInterval(intervalId);
  })
  reset.addEventListener('click', function(){
    clearInterval(intervalId);
    let min = 0;
    let sec = 0;
    time.textContent= min+":"+sec;
  })
})
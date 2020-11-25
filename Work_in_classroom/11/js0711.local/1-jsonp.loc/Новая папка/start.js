let newScript = document.createElement('script');
newScript.src = 'startDate.js';
document.body.appendChild(newScript);

let elements = document.querySelectorAll('.product');

for (let i = 0; i<elements.length; i++){
  if (priseData[i].isAvailable){
    elements[i].classList.add('product--available')
  } else {
    elements[i].classList.add('product--unavailable')
  }
  if (priseData[i].isSpecial){
    elements[i].classList.add('product--special')
  }
}
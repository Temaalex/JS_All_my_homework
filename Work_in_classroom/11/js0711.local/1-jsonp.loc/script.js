let productsList = document.querySelectorAll('.product');

function addData(element, dataList) {
  if (dataList.isAvailable) {
    element.classList.add('product--available');
  } else {element.classList.add('product--unavailable');}
  
  if (dataList.isSpecial) {
    element.classList.add('product--special');
  }
}

window.__catalogData = function (data) {
for (let i=0; i<=productsList.length-1; i++) {
  addData(productsList[i], data[i]);
}
};

let newData = document.createElement('script');
newData.src = 'data.js'; // загрузка данных из источника
document.body.append(newData);

newData.addEventListener('error', function() {
  document.body.textContent = 'Ошибка при загрузке данных';
});


  let URL = 'data.json';
  
  window.onload = function() {
    
    let xhr = new XMLHttpRequest();

    xhr.responseType="json";

    xhr.addEventListener('load', function() {
      let jsonData = xhr.response;
      console.log(jsonData);
    });
    xhr.open('GET', URL);
    xhr.send();

  }

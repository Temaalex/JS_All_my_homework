let button = document.querySelector('#test')

button.onclick = function(){
  let request = new XMLHttpRequest();
  request.open('GET', 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');
  
  request.addEventListener('load', function(){
    console.log("file yes");
    //console.log(request.response)
    
    let newObj = JSON.parse(request.response);
    //JSON.parse(newObj);
    console.log(newObj['squadName']);
  });
  request.addEventListener('error', function(){
    console.log("file no");
  });
  request.send();

}



window.onload = function(){
  document.querySelector('#find-ip').onclick = function() {
   
    getAjax('ip.php');

  }
}




function getAjax(url) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    //console.log(xhr.readyState);
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.querySelector('.myip').textContent = xhr.responseText;
    }
  }
  // xhr.addEventListener('load', function() {
  // });

  xhr.open('GET', url);
  xhr.send();


}
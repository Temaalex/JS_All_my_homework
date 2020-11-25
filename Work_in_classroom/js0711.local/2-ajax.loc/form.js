window.onload = function(){
  let inpName = document.querySelector('#name');
  let inpEmail = document.querySelector('#email');
  let inpPhone = document.querySelector('#phone');
  
  document.querySelector('#send').onclick = function(evt) {
    
    evt.preventDefault();

    let params = 'email='+inpEmail.value+'&phone='+inpPhone.value+'&name='+inpName.value;
    console.log(params);
    postAjax(params);

  }
}



function postAjax(params) {
  let xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.querySelector('.form-result').textContent = xhr.responseText;
    }
  }

  xhr.open('POST', 'api-form.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.send(params);
}
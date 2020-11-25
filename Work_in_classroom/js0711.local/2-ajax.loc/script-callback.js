window.onload = function(){
  document.querySelector('#find-ip').onclick = function() {
   
    getAjax('ip.php', getIp);

  }
}

function getIp(data) { // callback
  document.querySelector('.myip').textContent = data;
}


function getAjax(url, callback) {
  let xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      callback(xhr.responseText);
    }
  }

  xhr.open('GET', url);
  xhr.send();
}
$(function() {
  $('.callback-btn').on('click', function() {

    let formData = $('.callback').serializeArray();
    // console.log(formData);
    
    let request = {};
    for (i in formData) {
      request[formData[i].name] = formData[i].value;
      
    };

    $.post('mailer.php', request, function(response) {
        if (response == '1') {
          console.log('OK');
        }
    });
    // отмена действия по умолчанию
   return false;
  })





});
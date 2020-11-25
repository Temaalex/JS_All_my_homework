$('.block_close').on('click', function(){
  $('.block').fadeOut(500);
});

$('.block_open').on('click', function(){
  $('.block').fadeIn(500);
});

$('.block_toggle').on('click', function(){
  $('.block').fadeToggle(500, function(){
    $('.block_toggle').css('border','1px solid red');
  });
});

//-----------Задача

// $('.modal_open').on('click', function(){
//   $('.modal').fadeIn(500);
// });
// $('.modal_close').on('click', function(){
//   $('.modal').fadeOut(500);
// });

// $('.modal').hide();

// $('.modal_open').on('click', function(){
//   $('.modal').slideDown();
// });

// $('.modal_close').on('click', function(){
//   $('.modal').slideUp();
// });

$('.modal').hide();

$('.modal_open').on('click', function(){
  $('.modal').css('display', 'flex');
  $('.modal_content').animate({
    'width': '600px',
    'height': '200px'
  }, 300);
});

$('.modal_close').on('click', function(){
  $('.modal_content').animate({
    'width': '0px',
    'height': '0px'
  }, 300, function(){
    $('.modal').css('display', 'none')
  });
});

// $('.el').on('click', function(){
//   $('.el').animate({
//     'width': '300px',
//     'height': '50px',
//     'background-color': 'blue',
//     'border-radius': '8px',
    
//   }, 1000)
// })
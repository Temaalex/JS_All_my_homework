'use strict';

$('.tablinks_1').on('click', function(){
    $('.tabcontent_1').css('display', 'block');
    $('.tabcontent_2').css('display', 'none');
    $('.tabcontent_3').css('display', 'none');
})
$('.tablinks_2').on('click', function(){
    $('.tabcontent_2').css('display', 'block');
    $('.tabcontent_1').css('display', 'none');
    $('.tabcontent_3').css('display', 'none');
})
$('.tablinks_3').on('click', function(){
    $('.tabcontent_3').css('display', 'block');
    $('.tabcontent_1').css('display', 'none');
    $('.tabcontent_2').css('display', 'none');
})

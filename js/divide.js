$(function(){
  $('#text').bind('keydown keyup keypress change',function(){
    var textLength = $(this).val().length;

    $('#count').html(textLength);

    if(textLength >= 130){
      $('#count').css('color', '#f00');
    } else {
      $('#count').css('color', '#000');
    }
  });
});

$(document).ready( function(){
  $('#post').click(function(){
    var text = $('#text').val();
    $('#view').append(text);
    $('#view').append('<br>');
    $('#text').val('');
  });
});

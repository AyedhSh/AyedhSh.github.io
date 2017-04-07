
$(document).ready(function(){
    $(".box").hover(function(){
        $(this).css({
          'font-size' : '20px',
          'border-style' : '2px solid',
          'background-color' : '#ccc',
          
        });
        }, function(){
        $(this).css({
          'font-size' : '15px',
          'border-style' : '0px solid',
          'background-color' : '#f4f4f4'
        });
    });


    $.getJSON( "skill.json", function( data ) {
  $.each( data, function( key, val ) {
    $(`#${key}`).append( val);
  });
 
});






});



$.getJSON( "skill.json", function( data ) {
  $.each( data, function( key, val ) {
    $(`#${key}`).append( val);
  });
 
});
$(function(){
$('.box').hover(function(){
 $(this).width(20%);
  $(this).height(20%);
},function(){
  $(this).width(10%);
  $(this).height(10%);
});
});
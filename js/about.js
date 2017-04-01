$.getJSON( "skill.json", function( data ) {
  $.each( data, function( key, val ) {
    $('#appendix').append( "<li id='" + key + "'>" + val + "</li>" );
  });
 
});
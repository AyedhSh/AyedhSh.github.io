// key: JYMauzguIqqB59ZtV1QqA
// secret: gtvbs3xmM1ArjB8qrA1fufxVOTz52O0AiGTDYSsBg
// previewLink   ===> it's the link of book on google to watch
// volumeInfo.smallThumbnail.thumbnail == small image book
$('button').click(function(){
  // var whichBookYouWantToSearchFor = "Frankenstein";
  $('#table1').html('');
var whichBookYouWantToSearchFor2 = $('input').val();
console.log(whichBookYouWantToSearchFor2);

$.ajax({
  url: "https://www.googleapis.com/books/v1/volumes?q=" + whichBookYouWantToSearchFor2 + "&key=AIzaSyA4tOZ9uG-5f6G53bt9Z4SyUUbCcJSgfjQ",
  type: "GET",
  // dataType: 'jsonp',
  // headers: {
  //   'Access-Control-Allow-Origin': 'Content-Type, Accept, X-Requested-With, Session'
  // },
  success: function(response){
    // debugger;
    $('#book').append(`<img src=${response.items["0"].volumeInfo.imageLinks.thumbnail}>`);
    console.log(response);
     console.log(response.authors);
    console.log(response.items[0].volumeInfo.description);
    $('#table1').append('<tr><th>Book Title</th><th>Author Name</th> <th>Description</th></tr><tr><td>'+`${response.items[0].volumeInfo.title}`+'</td><td>'+`${response.items[0].volumeInfo.authors}`+'</td><td>'+`${response.items[0].volumeInfo.description}`+'</td></tr>');
  }
});

});

// '<tr><th>Book Title</th><th>Author Name</th> <th>Description</th></tr><tr><td>+`${response.title}`+</td><td>+`${response.authors[0]}`+</td><td>+`${response.items[0].volumeInfo.description}`+</td></tr>'
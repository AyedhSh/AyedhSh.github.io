// key: JYMauzguIqqB59ZtV1QqA
// secret: gtvbs3xmM1ArjB8qrA1fufxVOTz52O0AiGTDYSsBg
// previewLink   ===> it's the link of book on google to watch
// volumeInfo.smallThumbnail.thumbnail == small image book

var whichBookYouWantToSearchFor = "Frankenstein";

$.ajax({
  url: "https://www.googleapis.com/books/v1/volumes?q=" + whichBookYouWantToSearchFor + "&key=AIzaSyA4tOZ9uG-5f6G53bt9Z4SyUUbCcJSgfjQ",
  type: "GET",
  // dataType: 'jsonp',
  // headers: {
  //   'Access-Control-Allow-Origin': 'Content-Type, Accept, X-Requested-With, Session'
  // },
  success: function(response){
    // debugger;
    $('#book').append(`<img src=${response.items["0"].volumeInfo.imageLinks.thumbnail}>`);
    console.log(response);
    console.log(response.items[0].volumeInfo.description);
  }
});
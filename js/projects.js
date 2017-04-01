$(document).ready(function(){
  $('.button_1').click(function(){
    loadGit();
  });
});

function loadGit(){
$.ajax({
  url: 'https://api.github.com/users/AyedhSh/repos?sort=created&per_page=5',
  type: 'GET',
  datatype:  'json',
  success: function(data){
    for(let i = 0 ; i < data.length ; i++){
    $('#result').append('<div class="add"><a href='+`${data[i].html_url}`+'>'+`${data[i].name}`+'</a>'+`${data[i].created_at}`+'</div><br/>');
  }
  }
});
}

$(document).ready(function(){
  $('.button_1').click(function(){
    loadGit();
    $('.table-fill').fadeIn('slow');
  });

  $('.button_2').click(function(){

    loadFavorateRepo();
    $('.table-fill2').fadeIn('slow');
  });


});

function loadGit(){
   $('.table-fill').html(' ');
  $.ajax({
    url: 'https://api.github.com/users/AyedhSh/repos?sort=created&per_page=5',
    type: 'GET',
    datatype:  'json',
    success: function(data){
      $('.table-fill').append(createTable());
      for(let i = 0 ; i < data.length ; i++){
        console.log(data[i]);
        var date = new Date(data[i].created_at);
        $('.table-hover').append('<tr><td class="text-left2">'+'<a href='+`${data[i].html_url}`+' target="_blank">'+`${data[i].name}`+'</a>'+'</td>'+'<td class="text-left2">'+formatDate(date)+'</td></tr>');



      }
    },
    error: function(){
      alert("Invalid call or Check your Internet connection ");
    }
  });

}



function formatDate(date) {

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}

function loadFavorateRepo(){
  $('.table-fill2').html(' ');
  var repo = [['https://github.com/AyedhSh/hotels_in_iraq','hotels_in_iraq'],['https://github.com/AyedhSh/js-tweet-shortener-re-coded-000','Js tweet shortener'],['https://github.com/AyedhSh/javascript-lazy-loader-re-coded-000','Java Script lazy loader'],['https://github.com/AyedhSh/devise_pundit_lab-re-coded-000','Devise pundit'],['https://github.com/AyedhSh/cancan_lab-re-coded-000','Cancan_lab'],['https://github.com/AyedhSh/omniauth_readme-re-coded-000','Omniauth_readme']]
$('.table-fill2').append('<thead><tr><th class="text-left">Name </th></tr></thead><tbody class="table-hover2"></tbody>');
for(let i = 0; i < repo.length; i++){
$('.table-fill2 .table-hover2').append('<tr><td class="text-left">'+'<a href='+`${repo[i][0]}`+' target="_blank">'+`${repo[i][1]}`+'</a></td></tr>');
}
}

function createTable(){
  '<thead><tr><th class="text-left">Name </th><th class="text-left">Date</th></tr></thead><tbody class="table-hover"></tbody>'
}

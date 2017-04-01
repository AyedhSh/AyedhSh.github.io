// "uploads": "UU1RDSZrGXHqECSP-ZZSXH8w"
// API KEY = AIzaSyALp-l1KjrmC39wjPUwapy8mSHqjPKtmok

$(document).ready(function(){
$('#button2').click(function(){
  getVedio();
});
});

function getVedio(){
  $.get('GET https://www.googleapis.com/youtube/v3/channels',{
    part: 'contentDetails',
    forUsername: 'LearnCode',

  });
}
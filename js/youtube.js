// "uploads": "UU1RDSZrGXHqECSP-ZZSXH8w"
// API KEY = AIzaSyALp-l1KjrmC39wjPUwapy8mSHqjPKtmok

$(document).ready(function(){
  getVideo();
});

function getVideo(){
  $.get('https://www.googleapis.com/youtube/v3/channels',{
    part: 'contentDetails',
    forUsername: 'Googledevelopers',
    key: 'AIzaSyALp-l1KjrmC39wjPUwapy8mSHqjPKtmok'},
    
    function(data){
      $.each(data.items,function(key,value){
        pid=value.contentDetails.relatedPlaylists.uploads;
        callVideies(pid);
      });
    }
    );
}

function callVideies(pid){
 $.get('https://www.googleapis.com/youtube/v3/playlistItems',{
  part: 'snippet',
  maxresults: 10,
  playlistId: pid,
  key: 'AIzaSyALp-l1KjrmC39wjPUwapy8mSHqjPKtmok'},

  function(data){
    $.each(data.items,function(key,value){
      console.log(value);
      var videoId = value.snippet.resourceId.videoId;
      $('#result').append(`<iframe src="https://www.youtube.com/embed/${videoId}" id="fram"></iframe>`);

    });
  }
  );

}

function addToDom(videoId){
`<iframe src="https://www.youtube.com/embed/${videoId}" id="fram"></iframe>`
}

// <iframe src="https://www.youtube.com">
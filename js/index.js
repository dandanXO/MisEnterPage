$(function(){
$jQuery("body").fitText(1, { minFontSize: '20px', maxFontSize: '40px' });
$jQuery(".lay2").fitText(1, { minFontSize: '20px', maxFontSize: '40px' });
$jQuery(".lay3").fitText(1, { minFontSize: '20px', maxFontSize: '40px' });
$jQuery(".cover").fitText(1, { minFontSize: '20px', maxFontSize: '40px' });
});
var tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tv,
		playerDefaults = {autoplay: 0, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3};
var vid = [
		
			{'videoId': '38E9iHbuZNU', 'startSeconds': 0, 'endSeconds': 53, 'suggestedQuality': 'large'},
      	{'videoId': '38E9iHbuZNU', 'startSeconds': 54, 'endSeconds': 106, 'suggestedQuality': 'large'},
        	{'videoId': '38E9iHbuZNU', 'startSeconds': 107, 'endSeconds': 159, 'suggestedQuality': 'large'},
          	{'videoId': '38E9iHbuZNU', 'startSeconds': 160, 'endSeconds': 212, 'suggestedQuality': 'large'},
            	{'videoId': '38E9iHbuZNU', 'startSeconds': 212, 'endSeconds': 265, 'suggestedQuality': 'large'},
              
		],
		randomvid = Math.floor(Math.random() * (vid.length - 1 + 1));

function onYouTubePlayerAPIReady(){
  tv = new YT.Player('tv', {events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange}, playerVars: playerDefaults});
}

function onPlayerReady(){
  
  tv.loadVideoById(vid[randomvid]);
  randomvid=randomvid+1;
  tv.mute();
    if(randomvid == vid.length){
  randomvid=0;
}
}

function onPlayerStateChange(e) {
  if (e.data === 1){
    $('#tv').addClass('active');
  } else if (e.data === 0){
    tv.seekTo(vid[randomvid].startSeconds)
  }
}

function vidRescale(){

  var w = $(window).width()+200,
    h = $(window).height()+200;

  if (w/h > 16/9){
    tv.setSize(w, w/16*9);
    $('.tv .screen').css({'left': '0px'});
  } else {
    tv.setSize(h/9*16, h);
    $('.tv .screen').css({'left': -($('.tv .screen').outerWidth()-w)/2});
  }
}

$(window).on('load resize', function(){
  vidRescale();
});

$('#mute').on('click', function(){
  $('#tv').toggleClass('mute');
  if($('#tv').hasClass('mute')){
    tv.mute();
  } else {
    tv.unMute();
  }
});
$('#hr').show('slow');
$('.button').removeClass( "ls" ).show('slow');


	$('.lay2').click(function  () {
    var jadge = $('.tv').hasClass('jadge');
    if(jadge){   

       $('.lay2').animate({ "left": "20%" }, "slow" );
      $('.lay3').animate({ "left": "0%" }, "slow" );
           $('.tv').removeClass('jadge');}
           else{
  
        $('.tv').addClass('jadge');
        $('.lay2').animate({ "left": "0%" }, "slow" );
        $('.lay3').animate({ "left": "-20%" }, "slow" );
           }
  
    });
 


(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
  





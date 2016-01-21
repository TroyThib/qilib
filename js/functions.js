/*
console.log('Hello World!');
   _______ ____   ___ __     __
  |__   __|  _ \ / _ \\ \   / /
     | |  | |_| | | | |\ \_/ /
     | |  |    /| | | | \   /
     | |  | |\ \| |_| |  | |
     |_|  |_| |_|\___/   |_|

*/
  
$(".click").click(function(){
  $('.click').animate({
    fontSize:'20px',
    opacity:'0.5'
  });
});


// START scroll to ID
$("a").click(function() {
  //event.preventDefault(event); 
  var URL = $(this).attr("href");
  if (URL.substring(0, 1) == '#') 
    { 
      URL = URL.substring(1);
	  if(URL == 'top'){$('html,body').animate({scrollTop: 0},'slow');}
	  else 
	    {
          var aTag = $("span[id='"+ URL +"']");
          $('html,body').animate({scrollTop: aTag.offset().top},'slow');
	    }
    }
  else return;
  return false;
});
// END scroll to ID

$("header nav li").hover(function(){ 
  	if ($(this).find('ul').length) {
      $(this).find('ul').stop().toggle('slow');
    }},
  function(){
  if ($(this).find('ul').length) {
      $(this).find('ul').stop().toggle('slow');
    }
});

 
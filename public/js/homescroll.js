$(document).ready(function() {

  var homeScroll = (function(){

    var scrollToAnchor = function(){

    $('.header a, #sidebar a').click(function(e){
      e.preventDefault();
      console.log('hi');
        $('html,body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 800);
        return false;
    });
    };

    var init = function(){
      scrollToAnchor();
    };

    return{
      init: init,
    };

  })();

  homeScroll.init();

});

$(document).ready(function() {

  /* Used for simulate hover  on touch events on mobile devices */
  $('body').bind('touchstart', function() {});

  /* Every time the window is scrolled ... */
  $(window).scroll(function() {

    /* Check the location of each desired element */
    $('.hideme').each(function(i) {

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it in */
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({
          'opacity': '1'
        }, 800);

      }

    });

  });

  var homeScroll = (function(){

    var scrollToAnchor = function(){

    $('.scrollup a, #sidebar a').click(function(e){
      e.preventDefault();
      console.log('hi');
        $('html,body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top-80
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

  // Image Lightbox on only tablets and desktop
  var myModal = document.getElementById('myModal');
  var modalImg01 = document.getElementById("modalImg01");
  var caption1 = document.getElementById("caption1");

  if($(window).width() > 481) {

    $('.lightbox-img').on('click', function() {
        myModal.style.display = "block";
        var modalImg = $('img', this).attr('data-src');
        var modalCaption = $('img', this).attr('alt');
        modalImg01.src = modalImg
        caption1.innerHTML = modalCaption

        console.log(modalImg);
    });

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
      myModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == myModal) {
            myModal.style.display = "none";
        }
    }
  }

  $('.colored').hide();

  $('.lang-icons').hover(
    function () {
      $(this).find('i.icon-plain').hide();
      $(this).find('i.colored').show();
    },
    function () {
      $(this).find('i.icon-plain').show();
      $(this).find('i.colored').hide();
    }
  );

  $('img.giant-img').hide();

  if($(window).width() > 1441) {
    $('img.giant-img').show();
    $('img.medium-img').hide();
    $('img', '.lightbox-img').attr('data-src');
  }


});

// End Fade in on Scroll

$(document).ready(function() {

//SideBarNav
  var count = 0;
  $('#menu-icon').css({cursor: "pointer"}).on('click', function() {
    $('#menu-icon').each(function() {
      if (count === 0) {
        $('header').toggleClass("headerfade");
        $('#sidebar').toggle("slide");
        $('.sidecontainer').animate({left:'+=35%'}, 400, function() {});
        count = 1;
      } else if(count == 1){
        $('header').toggleClass("headerfade");
        $('#sidebar').toggle("slide");
        $('.sidecontainer').animate({left:'-=35%'}, 400, function() {});
        count = 0;
      }
    });
  });


// Image Lightbox
  var myModal = document.getElementById('myModal');
  var modalImg01 = document.getElementById("modalImg01");
  var caption1 = document.getElementById("caption1");

  $('.lightbox-img').on('click', function() {
      myModal.style.display = "block";
      var modalImg = $('img', this).attr('src');
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

});

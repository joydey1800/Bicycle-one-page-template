

$(document).ready(function(){
$("#offers_title").css("color", "orange");
  $(".sp1").click(function(){
  $(".spp1").addClass("d-block");
  $(".spp2").removeClass("d-block");
  $(".spp3").removeClass("d-block");
  $(".spp4").removeClass("d-block");
  $("#offers_title").css("color", "orange");

  });

$(".sp2").click(function(){
$(".spp2").addClass("d-block");
$(".spp1").removeClass("d-block");
$(".spp3").removeClass("d-block");
$(".spp4").removeClass("d-block");
$("#offers_title").css("color", "yellow");
});

$(".sp3").click(function(){
  $(".spp3").addClass("d-block");
  $(".spp2").removeClass("d-block");
  $(".spp1").removeClass("d-block");
  $(".spp4").removeClass("d-block");
  $("#offers_title").css("color", "#a8e4bb");
  });

$(".sp4").click(function(){
  $(".spp4").addClass("d-block");
  $(".spp3").removeClass("d-block");
  $(".spp2").removeClass("d-block");
  $(".spp1").removeClass("d-block");
  $("#offers_title").css("color", "#1976d2");
});




$(".menuicon").click(function(){
$(".mainmenu").css("left","0px");
function showMenu(){
  $(".mainmenu").css("-webkit-clip-path"," polygon(0 0,100% 0,100% 100%,0% 100%)");
  $(".menuicon").animate({right:"-100px"},300);
}
setTimeout(showMenu,100);
});
$(".cross").click(function(){
$(".mainmenu").css("-webkit-clip-path"," polygon(0 0,0% 0,100% 100%,0% 100%)");
function hideMenu(){
$(".mainmenu").css("left","-300px");
$(".menuicon").animate({right:"35px"},300);
}
setTimeout(hideMenu,300);

function ori(){
$(".mainmenu").css("-webkit-clip-path"," polygon(0 0,100% 0,0% 100%,0% 100%)");
}
setTimeout(ori,600);
});





// Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


});

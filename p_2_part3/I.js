$(function() {
  var text = $(".text");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      text.removeClass("hidden");
    } 
    if (scroll >= 400) {
      text.addClass("hidden");
    }

  });
});


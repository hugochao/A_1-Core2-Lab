$(function() {
  var text = $(".text");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      text.removeClass("hidden");
    } else {
      text.addClass("hidden");
    }
  });
});
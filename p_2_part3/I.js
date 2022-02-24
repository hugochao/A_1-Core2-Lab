$(function() {
  var text = $(".text");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 20) {
      text.removeClass("hidden");
    } else {
      text.addClass("hidden");
    }

  });
});

$(function() {
  var text = $(".text2");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 25) {
      text2.removeClass("hidden");
    } else {
      text2.addClass("hidden");
    }

  });
});
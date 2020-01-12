$(document).ready(function() {
  var scroll = 0;
  $(window).scroll(function() {
    scroll = $(this).scrollTop();
    if (scroll > 200) {
      $("#contact-button").css("transform", "rotate(90deg)");
      $("#contact-button").attr("href", "#");
    } else {
      $("#contact-button").css("transform", "rotate(0deg)");
      $("#contact-button").attr("href", "../");
    }
  });
});

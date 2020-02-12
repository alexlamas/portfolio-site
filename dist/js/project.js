$(document).ready(function() {
  var progress = 0;
  $(window).scroll(function() {
    var scroll = $(this).scrollTop();
    progress = (100 * scroll) / ($(document).height() - $(window).height());
    $(".progress").width(progress + "%");
    if (scroll < 30) {
      $("#contact-button").css("top", "30px");
      $(".navbar").css("top", "0");
      $(".progress").css("top", "85px");
    } else {
      $("#contact-button").css("top", "-140px");
      $(".navbar").css("top", "-140px");
      $(".progress").css("top", "0");
    }
  });
});

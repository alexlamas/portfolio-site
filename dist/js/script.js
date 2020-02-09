$(document).ready(function() {
  var scroll = 0;
  $(window).scroll(function() {
    var contactTop = $("#contact").offset().top;
    var windowHeight = $(window).height();
    var projectsTop = $("#projects").offset().top;
    var skillsTop = $("#skills").offset().top;
    var historyTop = $("#history").offset().top;
    var projectHeight = $("#projects")
      .find(".article")
      .height();
    var contactHeight = $("#contact").height();
    var contactHeight = $("#contact").height();
    var contactHeight = $("#contact").height();
    scroll = $(this).scrollTop();
    if (scroll > projectsTop + projectHeight - windowHeight) {
      $(".blob").css("stroke", "#EAEAEF");
    }
    if (scroll + windowHeight - 200 > skillsTop) {
      $(".blob").css("stroke", "#BF3B0B");
    }
    if (scroll + windowHeight - 100 > historyTop) {
      $(".blob").css("stroke", "#FFBFB7");
    }
    if (scroll + windowHeight - 100 > contactTop) {
      $(".blob").css("stroke", "#FFD447");
    }
    if (scroll < 5) {
      $(".blob").css("stroke", "#EAEAEF");
    }
    if (scroll + windowHeight - contactHeight > contactTop) {
      $("#contact-button").html("👆🏽");
      $("#contact-button").attr("href", "#");
      $("#contact-button").css("padding-right", "1.5px");
      $("#contact-button").css("padding-left", "1.5px");
    }
    if (scroll + windowHeight - contactHeight <= contactTop) {
      $("#contact-button").html("👋🏽");
      $("#contact-button").attr("href", "#contact");
      $("#contact-button").css("padding-right", "3px");
      $("#contact-button").css("padding-left", "0");
    }
  });
});
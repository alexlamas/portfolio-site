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
    if (scroll + windowHeight - contactHeight > contactTop) {
      $("#contact-button").css("transform", "rotate(180deg)");
      $("#contact-button")
        .parent()
        .attr("href", "#");
    }
    if (scroll + windowHeight - contactHeight <= contactTop) {
      $("#contact-button").css("transform", "rotate(0deg)");
      $("#contact-button")
        .parent()
        .attr("href", "#contact");
    }
  });
});

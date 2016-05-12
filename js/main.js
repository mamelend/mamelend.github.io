$(document).ready(function(){

  $("#about").on("click", function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $("#about_marker").offset().top
    }, 1000);
  });

    $("#contact").on("click", function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $("#contact_marker").offset().top
    }, 1000);
  });

  $("#dev").on("click", function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $("#dev_marker").offset().top
    }, 1000);
  });

  $("#editorial").on("click", function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $("#editorial_marker").offset().top
    }, 1000);
  });

});
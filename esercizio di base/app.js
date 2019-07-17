$(document).ready(function () {


  $(".square").on("click", function () {

    if ($(this).hasClass("red")) {
      $(this).css("background-color", "red");
    } else {
      $(this).css("background-color", "green");
    }

  })

});
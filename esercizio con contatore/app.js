$(document).ready(function () {

  var redLabel = document.getElementById("contatore-rossi");
  var greenLabel = document.getElementById("contatore-verdi");

  var redCounter = 0;
  var greenCounter = 0;

  $(".square").on("click", function () {

    if ($(this).hasClass("clicked") === false) {
      if ($(this).hasClass("red")) {
        $(this).css("background-color", "red");
        redCounter += 1;
        redLabel.innerHTML = redCounter;
        $(this).addClass("clicked");
      } else {
        $(this).css("background-color", "green");
        greenCounter += 1;
        greenLabel.innerHTML = greenCounter;
        $(this).addClass("clicked");
      }
    }
  })

});
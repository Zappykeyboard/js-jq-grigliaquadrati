$(document).ready(function () {

  var redLabel = document.getElementById("contatore-rossi");
  var greenLabel = document.getElementById("contatore-verdi");

  var redCounter = 0;
  var greenCounter = 0;

  $(".square").on("click", function () {

    //controllo se i quadrati sono stati già premuti
    if ($(this).hasClass("clicked") === false) {

      //controllo se i quadrati hanno la classe red, se no li coloro di verde
      if ($(this).hasClass("red")) {
        $(this).css("background-color", "red");

        redCounter += 1;
        redLabel.innerHTML = redCounter;

        //aggiungo la classe clicked, per impedire di aumentare il contatore sullo stesso quadrato
        $(this).addClass("clicked");
      } else {
        $(this).css("background-color", "green");
        greenCounter += 1;
        greenLabel.innerHTML = greenCounter;
        
        //aggiungo la classe clicked, per impedire di aumentare il contatore sullo stesso quadrato
        $(this).addClass("clicked");
      }
    }
  })

});
$(document).ready(function () {

  var redLabel = $("#contatore-rossi");
  var greenLabel = $("#contatore-verdi");

  var flex = $(".flex-container");

  var redCounter = 0;
  var greenCounter = 0;



  //genero la griglia
  for (var i = 0; i < 8; i++) {
    //genero una colonna, assegnando un numero da 0 a 7
    flex.append('<div class="col-' + i + '"></div>');

    for (var j = 0; j < 8; j++) {
      //genero un quadrato, assegnando il numero della colonna ed un numero da 0 a 7
      $(".col-" + i).append('<div class="square sq-' + i + '-' + j + '"></div>');
    }
  }

  //seleziono a caso i quadrati  da rendere rossi
  var redSquares = 0;
  var selectedSquare, colSelector, squareSelector;
  while (redSquares < 15) {
    //seleziono la colonna, generando un numero random tra 0 e 7
    colSelector = Math.floor(Math.random() * 7);
    //seleziono il quadrato, generando un numero random tra 0 e 7
    squareSelector = Math.floor(Math.random() * 7);
    
    selectedSquare = $(".sq-" + colSelector + "-" + squareSelector);

    //Se il quadrato non contiene la classe red, la aggiungo
   if (selectedSquare.hasClass("red") === false){
          selectedSquare.addClass("red");
          redSquares++;
        }  

  }


  $(".square").on("click", function () {

    //controllo se i quadrati sono stati già premuti
    if ($(this).hasClass("clicked") === false) {

      //controllo se i quadrati hanno la classe red, se no li coloro di verde
      if ($(this).hasClass("red")) {
        $(this).css("background-color", "red");
        redCounter += 1;
        redLabel.text(redCounter);
      } else {
        $(this).css("background-color", "green");
        greenCounter += 1;
        greenLabel.text(greenCounter)
      }
      //aggiungo la classe clicked, per impedire di aumentare il contatore sullo stesso quadrato
      $(this).addClass("clicked");
    }
  })

});
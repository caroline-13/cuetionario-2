// Crea la función addUser()
function addUser() {
  // Obtén el valor del usuario con id player1_name_input y player2_name_input
  player1_name = document.getElementById("player1_name_input").Value;
  player2_name = document.getElementById("player2_name_input").Value;

  // Almacena los valores en el almacenamiento local
 localStorage.setItem("player1",player1);
 localStorage.setItem("player2",player2);

  //Asigna "game_page.html" a window.location
  window.location="game_page.html";
}


$(document).ready(function() {

  var player;
  var choices = ['rock', 'paper', 'scissors'];
  var playerScore = 0;
  var compScore = 0;

  // function setUp() {
  //   $("#game").text(" ");
  //   $("#playerResults").text(" ");
  //   $("#playerResults").text("Player picks: " + player);
  //   $("#compResults").text(" ");
  //   $("#compResults").text("Computer picks: " + computer);
  // }

  function gamePlay() {
    $('button').each(function() {
      $(this).click(function() {
        var id = $(this).attr('id');
        if (id === 'rock') {
          console.log("ROCK in the house!!");
          player = "rock";
          var computer = choices[Math.floor(choices.length * Math.random())];
          // setUp();
          $("#game").text(" ");
          $("#playerResults").text(" ");
          $("#playerResults").text("Player picks: " + player);
          $("#compResults").text(" ");
          $("#compResults").text("Computer picks: " + computer);
          if (player === computer) {
            $("#game").text("It's a tie!");
          } else if (player === "rock" && computer === "paper") {
            $("#game").text("Computer wins!");
            compScore++;
            $("#compScore").text(compScore);
          } else if (player === "rock" && computer === "scissors") {
            $("#game").text("Player wins!");
            playerScore++;
            $("#playerScore").text(playerScore);
          }
        } else if (id === 'paper') {
          console.log("PAPER mah homies!");
          player = "paper";
          var computer = choices[Math.floor(choices.length * Math.random())];
          $("#game").text(" ");
          $("#playerResults").text(" ");
          $("#playerResults").text("Player picks: " + player);
          $("#compResults").text(" ");
          $("#compResults").text("Computer picks: " + computer);
          if (player === computer) {
            $("#game").text("It's a tie!");
          } else if (player === "paper" && computer === "scissors") {
            $("#game").text("Computer wins!");
            compScore++;
            $("#compScore").text(compScore);
          } else if (player === "paper" && computer === "rock") {
            $("#game").text("Player wins!");
            playerScore++;
            $("#playerScore").text(playerScore);
          }
        } else if (id === 'scissors') {
          console.log("SCISSORS give u luv!");
          player = "scissors";
          var computer = choices[Math.floor(choices.length * Math.random())];
          $("#game").text(" ");
          $("#playerResults").text(" ");
          $("#playerResults").text("Player picks: " + player);
          $("#compResults").text(" ");
          $("#compResults").text("Computer picks: " + computer);
          if (player === computer) {
            $("#game").text("It's a tie!");
          } else if (player === "scissors" && computer === "rock") {
            $("#game").text("Computer wins!");
            compScore++;
            $("#compScore").text(compScore);
          } else if (player === "scissors" && computer === "paper") {
            $("#game").text("Player wins!");
            playerScore++;
            $("#playerScore").text(playerScore);
          }
        }
      });
    });
  }

  function resetGame() {
    $("#playerResults").text(" ");
    $("#compResults").text(" ");
    playerScore = 0;
    compScore = 0;
    $("#playerScore").text(0);
    $("#compScore").text(0);
    $("#game").text(" ");
  }


  $("#reset").click(function() {
    resetGame();
  });

  gamePlay();

});

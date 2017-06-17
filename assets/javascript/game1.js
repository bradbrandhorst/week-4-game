
// no need for these extrablank lines and this can be indented to the edge
var playerScore= [];
var losses=0;
var wins=0;

window.onload = function () {
// everything in the onload function can be indented
//lets load this in the onload function, that way we can reference objects on the page
var restart = function() {
  playerScore=[];
  $(".numberGuess").text();
  computerNumber = Math.floor((Math.random() *20) + 19);
  $("#randomNumber").text(computerNumber);
  $(".results").clear();
}

computerNumber = Math.floor((Math.random() *20) + 19);
$("#randomNumber").text(computerNumber);
// same comment as above about extra blank lines

$(".crystals").click(function () {
   var crystalAmount = Math.floor((Math.random() * 12) + 1);
   playerScore.push (crystalAmount);
   var scoreAddition = (playerScore.join (" +  "));
   $(".numberGuess").text(scoreAddition);

if (playerScore.length===4) {
   var playerScoreTotal = (playerScore[0] + playerScore [1] + playerScore [2] + playerScore [3]);
 //var result = $(".results").html("Your crystals amount to  " + playerScoreTotal + ", not " + computerNumber + "!");

    if (playerScoreTotal==computerNumber){
       wins ++;
       $(".wins").text("Wins: " + wins);
       $(".results").html("Your crystals match! Brutality neutralized!");
    }

    if (playerScoreTotal!=computerNumber){
      losses ++;
      $(".losses").text("Losses: " + losses);
      $(".results").html("Your crystals amount to  " + playerScoreTotal + ", not " + computerNumber + "!");
    }
    restart();
} 
});





    




} 


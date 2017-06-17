

  var restart = function() {
  playerScore=[];
  $(".numberGuess").text();
  computerNumber = Math.floor((Math.random() *20) + 19);
  $("#randomNumber").text(computerNumber);
  $(".results").clear();
}


      var playerScore= [];
      var losses=0;
      var wins=0;

window.onload = function () {
computerNumber = Math.floor((Math.random() *20) + 19);
$("#randomNumber").text(computerNumber);
  




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


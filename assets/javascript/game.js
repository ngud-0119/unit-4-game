var startingNumber;
var crystalValues;
var newValueArray = [];
var numberOfWins = 0;
var numberOfLosses = 0;
var totalScore = 0;
var newTotalScore;
var newValues;
var randomNumber = Math.floor((Math.random() * 12) + 1);

function gameStart(){
    startingNumber = Math.floor((Math.random() * 120) + 19);
    totalScore = 0;
    $("#target_number").html("Match this number: <br> " + startingNumber);
    $("#total_score").text("Total Score: " + totalScore);
    $("#total_wins").text("Wins: " + numberOfWins);
    $("#total_losses").text("Losses: " + numberOfLosses);
    newRandomNumbers("#blue_crystal");
    newRandomNumbers("#green_crystal");
    newRandomNumbers("#purple_crystal");
    newRandomNumbers("#red_crystal");
}
function newRandomNumbers(id){
    for (i = 0; i < 4; i++){
        randomNumber = Math.floor((Math.random() * 12) + 1); 
    }
    $(id).attr("value", randomNumber);
}
function addingTotalScore(){
    var crystalValue = parseInt($(this).attr("value"));
    totalScore += crystalValue;
    $("#total_score").html("Total Score: " + totalScore);
    if (totalScore === startingNumber){
        numberOfWins++;
        gameStart();
    }
    else if (totalScore > startingNumber){
        numberOfLosses++;
        gameStart();
    }
}
function onPageLoad(){
    $(".crystal").on("click", addingTotalScore);
    gameStart();
}
window.onload = onPageLoad;

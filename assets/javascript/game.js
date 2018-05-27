// declaring variables for the various objects

var startingNumber;
var crystalValues;
var newValueArray = [];
var numberOfWins = 0;
var numberOfLosses = 0;
var totalScore = 0;
var newTotalScore;
var newValues;
var randomNumber = Math.floor((Math.random() * 12) + 1);




// when the game starts, generate a new number to add to.
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

function gameReset(){
    startingNumber = Math.floor((Math.random() * 120) + 19);
    $("#target_number").html("Match this number: <br> " + startingNumber);
    totalScore = 0;
    newRandomNumbers("#blue_crystal");
    newRandomNumbers("#green_crystal");
    newRandomNumbers("#purple_crystal");
    newRandomNumbers("#red_crystal");
    $("#total_score").text("Total Score: " + totalScore);
    $("#total_wins").text("Wins: " + numberOfWins);
    $("#total_losses").text("Losses: " + numberOfLosses);

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
        gameReset(); 
    }
    else if (totalScore > startingNumber){
        numberOfLosses++;
        gameReset();
    }



}

// assign values to each one of the crystals
$(".crystal").on("click", addingTotalScore);
window.onload = gameStart;

// declaring variables for the various objects

var startingNumber;
var crystalValueArray = [];
var numberOfWins = 0;
var numberOfLosses = 0;
var totalScore = 0;
var newTotalScore;


// when the game starts, generate a new number to add to.
function gameStart(){
    startingNumber = Math.floor((Math.random() * 120) + 19);
    totalScore = 0;
    $("#target_number").html("Match this number: <br> " + startingNumber);
    $("#total_score").text("Total Score: " + totalScore);
    $("#total_wins").text("Wins: " + numberOfWins);
    $("#total_losses").text("Losses: " + numberOfLosses);
    newCrystalValues();
    assignCrystalValue("#blue_crystal", 0);
    assignCrystalValue("#green_crystal", 1);
    assignCrystalValue("#purple_crystal", 2);
    assignCrystalValue("#red_crystal", 3);
}

function gameReset(){
    startingNumber = Math.floor((Math.random() * 120) + 19);
    $("#target_number").html("Match this number: <br> " + startingNumber);
    totalScore = 0;
    $("#total_score").text("Total Score: " + totalScore);
    $("#total_wins").text("Wins: " + numberOfWins);
    $("#total_losses").text("Losses: " + numberOfLosses);
    crystalValueArray = [];
    newCrystalValues();
}

function newCrystalValues(){
    for (var i = 0; i < 4; i++) {
            randomNumber = Math.floor((Math.random() * 12) + 1);
            crystalValueArray.push(randomNumber);
        }
        console.log(crystalValueArray);
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
};


function assignCrystalValue(id, index){
    $(id).attr("value", crystalValueArray[index]);
    $(id).on("click", addingTotalScore);
}

// assign values to each one of the crystals

window.onload = gameStart;






// when one of the crystals is clicked, add the value to the crystal to the total on the bottom of the page.

// if the value of the crystal is equal to the value of the number to add to,
// alert or put on the page "YOU WIN", else if you are over the number to add to, 
// alert or put on page "YOU LOSE", 
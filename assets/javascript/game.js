// declaring variables for the various objects

var startingNumber = Math.floor((Math.random() * 120) + 19);
var crystalValueArray = [];
var numberOfWins = 0;
var numberOfLosses = 0;
var totalScore = 0;
var newTotalScore;




// when the game starts, generate a new number to add to.


function newCrystalValues(){
while(crystalValueArray.length < 4){
    var randomnumber = Math.floor(Math.random()*12) + 1;
    if(crystalValueArray.indexOf(randomnumber) > -1) continue;
    crystalValueArray[crystalValueArray.length] = randomnumber;
    }
}



function assignCrystalValue(id, index){
    $(id).attr("value", crystalValueArray[index]);
    var crystalValue = $(id).attr("value");
    $(id).on("click", function(){
        crystalValue = parseInt(crystalValueArray[index]);
        newTotalScore = (totalScore += crystalValue);
        $("#total_score").html("Total Score: " + newTotalScore);
    });
}

// assign values to each one of the crystals

window.onload = function gameStart(){
    $("#total_score").html("Total Score: " + totalScore);
    $("#target_number").html("Match this number: <br> " + startingNumber);
    $("#total_wins").text("Wins: " + numberOfWins);
    $("#total_losses").text("Losses: " + numberOfLosses);
    newCrystalValues();
    assignCrystalValue("#blue_crystal", 0);
    assignCrystalValue("#green_crystal", 1);
    assignCrystalValue("#purple_crystal", 2);
    assignCrystalValue("#red_crystal", 3);
}

if (newTotalScore === startingNumber){
    numberOfWins++;
    alert("YOU WIN!!");
}




// when one of the crystals is clicked, add the value to the crystal to the total on the bottom of the page.

// if the value of the crystal is equal to the value of the number to add to,
// alert or put on the page "YOU WIN", else if you are over the number to add to, 
// alert or put on page "YOU LOSE", 
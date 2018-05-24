// declaring variables for the various objects

var startingNumber = Math.floor((Math.random() * 120) + 19);
var crystalValueArray = [];
var wins = 0;
var losses = 0;
var totalScore = 0;

// when the game starts, generate a new number to add to.
function newStartingNumber(){
$("#target_number").html("Try to match this number:<br> " + startingNumber);
}

newStartingNumber();

function assignCrystalValues(){
while(crystalValueArray.length < 4){
    var randomnumber = Math.floor(Math.random()*12) + 1;
    if(crystalValueArray.indexOf(randomnumber) > -1) continue;
    crystalValueArray[crystalValueArray.length] = randomnumber;
    }
}

assignCrystalValues();

function logCrystalValue(id, index){
    $(id).attr("value", crystalValueArray[index]);
    $(id).on("click", function (){
        console.log(crystalValueArray[index]);
    });
}

// assign values to each one of the crystals
logCrystalValue("#blue_crystal", 0);
logCrystalValue("#green_crystal", 1);
logCrystalValue("#purple_crystal", 2);
logCrystalValue("#red_crystal", 3);

// when one of the crystals is clicked, add the value to the crystal to the total on the bottom of the page.

// if the value of the crystal is equal to the value of the number to add to,
// alert or put on the page "YOU WIN", else if you are over the number to add to, 
// alert or put on page "YOU LOSE", 
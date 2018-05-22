// declaring variables for the various objects

var randomStartingNumber = Math.floor((Math.random() * 120) + 19);
var wins;
var losses;


function newStartingNumber(){
$("#target_number").html("Try to match this number:<br> " + randomStartingNumber);
}

newStartingNumber();
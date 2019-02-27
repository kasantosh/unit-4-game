var diamond = 0;
var emerald = 0;
var ruby = 0;
var saphire = 0;
var totalScore = 0;
var wins = 0;
var loss = 0;

//Initializes a random number for the game not less than 30
function gameRandomNum(x) {
  x = Math.floor(Math.random() * 60 + 30);
  return x;
}
// function for gem stone values not less than 1
function gemRandomNum(x) {
  x = Math.floor(Math.random() * 10);
  return x + 1;
}

//start the game with a random number
var gameNum = gameRandomNum();
$("#randomNumber").html(gameNum);
console.log(gameNum);

//random values for gem stones
diamond = gemRandomNum();
console.log(diamond);
emerald = gemRandomNum();
console.log(emerald);
saphire = gemRandomNum();
console.log(saphire);
ruby = gemRandomNum();
console.log(ruby);

//reset game
function reset() {
  totalScore = 0;
  gameNum = gameRandomNum();
  console.log(gameNum);
  $("#randomNumber").html(gameNum);
  $("#totalScore").html("0");
  diamond = gemRandomNum();
  console.log(diamond);
  emerald = gemRandomNum();
  console.log(emerald);
  saphire = gemRandomNum();
  console.log(saphire);
  ruby = gemRandomNum();
  console.log(ruby);
}

//function to check result
function check() {
  if (totalScore > gameNum) {
    alert("You lose");
    loss++;
    $("#losses").html("Losses: " + loss);
    reset();
  }
  if (totalScore === gameNum) {
    alert("You Win");
    wins++;
    $("#wins").html("Wins: " + wins);
    reset();
  }
}
$("#diamond").on("click", function() {
  totalScore = totalScore + diamond;
  $("#totalScore").html(totalScore);
  check();
});
$("#emerald").on("click", function() {
  totalScore = totalScore + emerald;
  $("#totalScore").html(totalScore);
  check();
});
$("#ruby").on("click", function() {
  totalScore = totalScore + ruby;
  $("#totalScore").html(totalScore);
  check();
});

$("#saphire").on("click", function() {
  totalScore = totalScore + saphire;
  $("#totalScore").html(totalScore);
  check();
});

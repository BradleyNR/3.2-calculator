(function(){
  'use strict';

var allNumberButtons = document.querySelectorAll('.number');
var clearButton = document.getElementById("clear_button");
var operatorButton = document.querySelectorAll('.operator');
var equalButton = document.getElementById('equal_button');
var answerBox = document.getElementById('answer_area');
var operatorSymbol;
var isOperator = false;
var numOne = '';
var numTwo = '';


for (var i = 0; i < allNumberButtons.length; i++) {
  //this calls the below function and clears the values in the array
  clear_button.addEventListener("click", clearValues)

  //this adds numbers and operators to the array on button click
  allNumberButtons[i].addEventListener("click", function() {
    var buttonContent = event.target.textContent;
    pushNumber(buttonContent);
    });
  // answerBox.textContent = answer;
}

//adds operator to var
for (var j = 0; j < operatorButton.length; j++) {
  operatorButton[j].addEventListener("click", function(){
    operatorSymbol = event.target.textContent;
    isOperator = true;
    console.log(operatorSymbol);
  })
}



//puts variables into variables one or two
function pushNumber(numbers){
  if (isOperator == false) {
    numOne += numbers;
  } else if (isOperator == true) {
    numTwo += numbers;
  }
 // numberOperation += numbers;
 console.log(numOne, numTwo);
}



//function to clear values from variables
function clearValues(){
numOne = '';
numTwo = '';
isOperator = false;
answerBox.textContent = 'Clear';
}


//This is the logic for the equal button.
equalButton.addEventListener("click", function(){

  var x = numOne;
  var y = numTwo;


  console.log('x', x, 'y', y);
  if (operatorSymbol == "+") {
    var answer = x + y;
  } else if (operatorSymbol == "-"){
    var answer = x - y;
  } else if (operatorSymbol == "*"){
    var answer = x * y;
  } else if (operatorSymbol == "/"){
    var answer = x / y;
  }

  console.log(answer);
  // answerBox.textContent = answer;
  answerAndClearVars(answer);

})

//this allows you to do back to back calculations without clearing
//such as 2 + 2 = answer, then immediately 5 * 5 = answer.
//It also sets isOperator back to false so your first numbers will go
//into variable one
function answerAndClearVars(answers){
  answerBox.textContent = answers;
  isOperator = false;
  numOne = '';
  numTwo = '';
}




}());

var equationDisplay = document.querySelector('#equationDisplay');
var maxValue = 35;
reset();
var counter = 0;
var wrong = 0;
var resultDisplay = document.querySelector('.resultDisplay');
resultDisplay.textContent = result;
equationDisplay.textContent = operationDisplay;
var answerButton = document.querySelectorAll('.answerButton');
var correctAnswers = document.querySelectorAll('.count');

var limit = document.getElementById("limit").value;
document.getElementById("submit").addEventListener("click", function(){
	maxValue = document.getElementById("limit").value;
	reset();
	var counter = 0;
	var wrong = 0;
})



//generate random possible solutions
/*
for (var i = 0; i < answerButton.length; i++) {
	answerButton[i].textContent = Math.floor(Math.random()*11+1);
}
*/
//solution check
for (var i = 0; i < answerButton.length; i++) {
	answerButton[i].addEventListener("click", function() {
		if(parseInt(this.textContent) === result ) {
			document.querySelector(".correct").classList.add("rightAnswer");
			document.querySelector(".resultDisplay").classList.add("appear");
			bravo(counter);
			//document.querySelector(".count").classList.add("correctAnswers");
			counter++;
			setTimeout(function(){
				document.querySelector(".resultDisplay").style.display = "none";
				reset();
			}, 1000);
			if (wrong+counter===5) {
				roundEnd();
				//tu ce da ide povratak na prethodnu stranu
			}
		} else {
			wrong++;
			document.querySelector(".wrong").classList.add("rightAnswer");
			setTimeout(function(){
				document.querySelector(".resultDisplay").style.display = "none";
				reset();
			}, 1000);
			if (wrong+counter===5) {
				roundEnd();
				//tu ce da ide povratak na prethodnu stranu
			}
		}
	})
}

function reset () {
	var randomNumber1 = randomIntFromInterval(0, maxValue/2-1);
	var randomNumber2 = randomIntFromInterval(maxValue/2+1, maxValue-1);
	if(randomNumber1 + randomNumber2 > maxValue) {
	var randomNumber1 = randomIntFromInterval(0, maxValue/2-2);
	var randomNumber2 = randomIntFromInterval(maxValue/2, maxValue/2+1);
	}
	operationDisplay = randomNumber1 + ' + ' + randomNumber2 + ' = ';
	result =  randomNumber1 + randomNumber2;
	resultDisplay = document.querySelector('.resultDisplay');
	resultDisplay.textContent = result;
	equationDisplay.textContent = operationDisplay;
	answerButton = document.querySelectorAll('.answerButton');

	var step = Math.floor(maxValue/4);

	answerButton[0].textContent = Math.floor(Math.random()*step)+1;
	answerButton[1].textContent = Math.floor(Math.random()*step)+1+step;
	answerButton[2].textContent = Math.floor(Math.random()*step)+1+2*step;
	answerButton[3].textContent = randomIntFromInterval(2+2*step, maxValue);

	shuffle(answerButton);

	//check if random number is equal to the result
	for (var i = 0; i < answerButton.length; i++) {
		if (parseInt(answerButton[i].textContent) === result ) {
			answerButton[i].textContent = Math.floor(Math.random()*maxValue+1);
		}
	}

	//make one of the solutions equals the result
	randomSolution = Math.floor(Math.random()*answerButton.length);
	answerButton[randomSolution].textContent = result;

	document.querySelector(".correct").classList.remove('rightAnswer');
	document.querySelector(".wrong").classList.remove("rightAnswer");
	document.querySelector(".resultDisplay").classList.remove("appear");
	document.querySelector(".resultDisplay").style.display = "inline-block";
	for(var i = 0; i < answerButton.length; i++){
		answerButton[i].classList.remove('fadeOut');
	}
}

function bravo(count) {
	correctAnswers[count].style.backgroundColor = "#00d2e0"
}

function roundEnd (){
	wrong, counter = 0;
	document.querySelector("#answerButtons").classList.add("fadeOut");
	setTimeout(function(){
		document.querySelector("#answerButtons").style.display="none";
		document.querySelector(".countStripe").classList.add("moveUp");
		reset();
	}, 1500);

}
function newRound() {
	reset();
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex].textContent;
    array[currentIndex].textContent = array[randomIndex].textContent;
    array[randomIndex].textContent = temporaryValue;
  }

  return array;
}
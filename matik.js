var equationDisplay = document.querySelector('#equationDisplay')
var randomNumber1 = Math.floor(Math.random() *10)+1;
var randomNumber2 = Math.floor(Math.random() *5)+1;
if(randomNumber1 + randomNumber2 >10) {
	var randomNumber1 = Math.floor(Math.random() *2)+1;
	var randomNumber2 = Math.floor(Math.random() *6);
}
var operationDisplay = randomNumber1 + ' + ' + randomNumber2 + ' = ';
var result =  randomNumber1 + randomNumber2;
var resultDisplay = document.querySelector('#resultDisplay');
resultDisplay.textContent = result;
equationDisplay.textContent = operationDisplay;
var answerButton = document.querySelectorAll('.answerButton');

//generate random possible solutions
/*
for (var i = 0; i < answerButton.length; i++) {
	answerButton[i].textContent = Math.floor(Math.random()*11+1);
}
*/
//
answerButton[0].textContent = Math.floor(Math.random()*2)+1;
answerButton[1].textContent = Math.floor(Math.random()*2)+3;
answerButton[2].textContent = Math.floor(Math.random()*2)+5;
answerButton[3].textContent = Math.floor(Math.random()*2)+8;


//check if random number is equal to the result
for (var i = 0; i < answerButton.length; i++) {
	if (parseInt(answerButton[i].textContent) === result ) {
		answerButton[i].textContent = Math.floor(Math.random()*11);
	}
}

//make one of the solutions equals the result
var randomSolution = Math.floor(Math.random()*answerButton.length);
answerButton[randomSolution].textContent = result;

//solution check
for (var i = 0; i < answerButton.length; i++) {
	answerButton[i].addEventListener("click", function() {
		if(parseInt(this.textContent) === result ) {
			document.querySelector(".correct").classList.add("rightAnswer");
			setTimeout(function(){
				reset();
			}, 1000);
			
		} else {
			this.classList.add("fadeOut");
		}
	})
}

function reset () {
	randomNumber1 = Math.floor(Math.random() *10)+1;
	randomNumber2 = Math.floor(Math.random() *5)+1;
	if(randomNumber1 + randomNumber2 >10) {
		randomNumber1 = Math.floor(Math.random() *2)+1;
		randomNumber2 = Math.floor(Math.random() *6);
	}
	operationDisplay = randomNumber1 + ' + ' + randomNumber2 + ' = ';
	result =  randomNumber1 + randomNumber2;
	resultDisplay = document.querySelector('#resultDisplay');
	resultDisplay.textContent = result;
	equationDisplay.textContent = operationDisplay;
	answerButton = document.querySelectorAll('.answerButton');

	answerButton[0].textContent = Math.floor(Math.random()*2)+1;
	answerButton[1].textContent = Math.floor(Math.random()*2)+3;
	answerButton[2].textContent = Math.floor(Math.random()*2)+5;
	answerButton[3].textContent = Math.floor(Math.random()*2)+8;
	//check if random number is equal to the result
	for (var i = 0; i < answerButton.length; i++) {
		if (parseInt(answerButton[i].textContent) === result ) {
			answerButton[i].textContent = Math.floor(Math.random()*11);
		}
	}
	//make one of the solutions equals the result
	randomSolution = Math.floor(Math.random()*answerButton.length);
	answerButton[randomSolution].textContent = result;

	document.querySelector(".correct").classList.remove('rightAnswer');
	for(var i = 0; i < answerButton.length; i++){
		answerButton[i].classList.remove('fadeOut');
	}
}
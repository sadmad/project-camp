/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores = [0, 0];
var roundScore = 0;
var activePlayer = 0;
document.getElementById('score-0').textContent = "0";
document.getElementById('score-1').textContent = "0";
document.getElementById('current-0').textContent = "0";
document.getElementById('cuttent-1').textContent = "0"


document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function(){
	// 1. Random number
	var dice = Math.floor(Math.random() * 6) + 1;

	// 2. Display the result
	document.querySelector('.dice').style.display = 'block';
	document.querySelector('.dice').setAttribute('src', 'dice-' + dice + ".png");
	document.getElementById('score-0').textContent = "0";

	// 3.Update the round score IF the rolled number was not No.1
	var x = document.querySelector('#current-' + activePlayer).textContent
	if( dice > 1 ){
		document.querySelector('#current-' + activePlayer).textContent = parseInt(x) + dice;
	}else{
		if (activePlayer === 0){
			activePlayer = 1;
		}else{
			activePlayer = 0;
		}
	}
});
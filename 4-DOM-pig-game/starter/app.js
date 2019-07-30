/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer

function init() {
	scores = 0;
	roundScore = 0;
	activePlayer = 0;
	document.getElementById('score-0').textContent = "0";
	document.getElementById('score-1').textContent = "0";
	document.getElementById('current-0').textContent = "0";
	document.getElementById('current-1').textContent = "0";
	document.querySelector('.dice').style.display = 'none';
	document.querySelector('#name-0').textContent = 'Player-1';
	document.querySelector('#name-1').textContent = 'Player-2';
	document.querySelector('.dice').style.display = 'none;';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');

}

init();

var activeChange = function(){
	activePlayer === 0? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
	document.getElementById('current-0').textContent = 0;
	document.getElementById('current-1').textContent = 0;
	document.querySelector('.dice').style.display = 'none;';
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');			
}

// Roll dice event start
document.querySelector('.btn-roll').addEventListener('click', function(){
	// 1. Random number
	var dice = Math.floor(Math.random() * 6) + 1;

	// 2. Display the result
	document.querySelector('.dice').style.display = 'block';
	document.querySelector('.dice').setAttribute('src', 'dice-' + dice + ".png");

	// 3.Update the round score IF the rolled number was not No.1
	if( dice > 1 ){
		roundScore += dice;
		document.getElementById('current-' + activePlayer).textContent = roundScore;

	}else{
		//change the active player
	 	activeChange();
	}
});

//Hold event start
document.querySelector('.btn-hold').addEventListener('click', function(){
	scores = parseInt(document.getElementById('score-' + activePlayer).textContent);
	scores += parseInt(document.getElementById('current-' + activePlayer).textContent);
	document.getElementById('score-' + activePlayer).textContent = scores;
	if( scores >= 20){
		document.querySelector('#name-' + activePlayer).textContent = 'winner!';
		document.querySelector('.dice').style.display = 'none;';
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');			
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

	}
	activeChange()

});

//New Button
document.querySelector('.btn-new').addEventListener('click', init);


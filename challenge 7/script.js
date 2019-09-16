function question(){
		var question, answer;
		var allQuestions = [];
		var loop = true;
		while (loop === true){
			question = prompt("what is your question" + "?");
			answer = prompt("what is the answer of this question?");
			allQuestions.push([question, answer]);
			if (confirm("do you want to start the game")){
				loop = false;
			}
		}
		var element = document.querySelector("#btn-game-start");
		element.style.display = "block";
		element.addEventListener('click', function(){
			checkAnswer(allQuestions)
		});
}

function checkAnswer(el){
 	var playerAnswer = [];
	var score = 0;
	console.log(el.length);
 	for(var i = 0; i < el.length; i++){
	 	playerAnswer = prompt(el[i][0]);
	 	if(playerAnswer === el[i][1]){
			score++
		}else{
			alert("your answer was wrong!");
		}
 }
 if((score*100)/el.length > 80){
	 document.querySelector(".score").innerHTML ="<h2>You won The Game</h2> ";
 }else{
	 document.querySelector(".score").innerHTML ="<h2>You lost The Game and your score is</h2> " + score;
 }
}

document.querySelector("#btn").addEventListener('click', question);

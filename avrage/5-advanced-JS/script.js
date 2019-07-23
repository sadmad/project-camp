var johnTScore = [89, 120, 103];
var mikeTScore = [116, 94, 123];
var maryTScore = [97, 134, 105];

var avragej = (89 + 120 + 103)/3;
var avragem = (116 + 94 + 123)/3;
var avragemary = (97 + 134 + 105)/3;

if (avragej > avragem && avragej > avragemary){
	console.log(`John's Team win the avrage contest with the avrage of ${avragej}`);
}else if ( avragej < avragem && avragem > avragemary ){
	console.log(`Mike's Team win the avrage contest with the avrage of ${avragem}`);
}else{
	console.log(`Mary's Team win the avrage contest with the avrage of ${avragemary}`);
}

for(var i = 0; i<3; i++){
	if( johnTScore[i] > mikeTScore[i] ){
		switch(i){
			case 0:
			console.log("john's Team won the first match");
			break;
			case 1:
			console.log("john's Team won the second match");
			break;
			case 2:
			console.log("John's Team won the third match");
		}
	}else if( johnTScore[i] < mikeTScore[i] ){
		  switch(i){
			case 0:
			console.log("Mike's Team won the first match");
			break;
			case 1:
			console.log("Mike's Team won the second match");
			break;
			case 2:
			console.log("Mike's Team won the third match");
				}
		}else{
			  switch(i){
			case 0:
			console.log("draw the first match");
			break;
			case 1:
			console.log("draw the second match");
			break;
			case 2:
			console.log("draw the third match");
				
		}
	}
}
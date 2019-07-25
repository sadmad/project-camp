
var restaurant = function(a){
	switch(a){
		case 0:
			return "The amount of tip in first restaurant is ";
		case 1: 
			return "The amount of tip in second restaurant is ";
		case 2:
			return "The acmount of tip in third restaurant is ";
		case 3:
			return "The acmount of tip in forth restaurant is ";

	}

}


var bill = {
	 bills: [124, 48, 268, 180],
	 tips: [],
	 paids: [],
	 amount: function() {
	 	console.log(this.bills.length)
	 	for(var i = 0; i < this.bills.length; i++){
	 		if( this.bills[i] < 50){
				this.tips[i] =  this.bills[i] * .2;

			} else if ( this.bills[i] === 50 || ( this.bills[i] > 50 && this.bills[i] < 200 ) ) {
			    this.tips[i] =  this.bills[i] * .15;

			
			} else {
				this.tips[i] =  this.bills[i] * .10;

			}
		this.paids[i] = this.tips[i] + this.bills[i];
		console.log(restaurant(i) + this.tips[i] + " and the final paid amount was " + this.paids[i]);
	 	}
	 },

	 
}
console.log(bill.bills)
bill.amount();
console.log(bill.paids)
console.log(bill)


/* function amount(value, index){

		if( value < 50){
			var percent = (20 * value ) / 100;
			console.log(restaurant(index) + percent);
		} else if ( value === 50 || ( value > 50 && value < 200 ) ) {
			var percent =  (15 * value) / 100;
			console.log(restaurant(index) + percent);
		} else {
			var percent =  (10 * value) / 100;
			console.log(restaurant(index) + percent);
		}
}

funcetion amount(value, index){
	switch (value){
		case value < 50;
		    console.log(resturant(index) + ((20 * value) / 100) );
		    break;
		case value >= 50 && value < 200;
		    console.log(resturant(index) + ((15 * valye) / 100) "$");
		    break;
		case value > 200;
		    console.log(resturant(index) + (( 10 * value) / 100) + "$";
	}
}
 var tip = function(amount){
	for( var i = 0 ; i > amount.length; i++){
		console.log("loop");
		if(amount[i] < 50){
			var percent = (20 * amount[i]) / 100;
			console.log(restaurant(i) + percent);
		} else if ( amount[i] === 50 || ( amount[i] > 50 && amount[i] < 200 ) ) {
			var percent =  (15 * amount[i]) / 100;
			console.log(restaurant(i) + percent);
		} else {
			var percent =  (10 * amount[i]) / 100;
			console.log(restaurant(i) + percent);
		}
	}

}

bills.forEach(amount);
*/ 

console.log("Here is the amount of each tip in the restaurants");


var john = {

	firstName: "John Smith",
	mass: 70,
	height: 1.6,
	calculatebmi: function() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
}

var mark = {
	firstName: "Mark Miller",
	mass: 80,
	height: 1.7,
	calculatebmi: function() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
}
john.calculatebmi();
mark.calculatebmi();
john.bmi > mark.bmi? console.log(`${john.firstName} BMI is higher than ${john.firstName} and the BMI is ${john.calculatebmi()}`) : console.log(`${mark.firstName} BMI is higher than ${john.firstName} and the BMI is ${mark.calculatebmi()} `)
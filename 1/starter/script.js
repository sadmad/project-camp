console.log("Hello Word!!!");

class personBpi {
  constructor(name, a, b) {
    this.name = name;
    this.a = a;
    this.b = b;
  }
  majorBpi() {
    const bpi = this.a / Math.pow(this.b, 2);
    console.log(`Dear ${this.name} your BPI is ${bpi}`);
  }
}
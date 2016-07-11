class Sample {
    constructor(text) { this.text = text; }
    printHello() { console.log(`hello ${this.text}`); }
}
var sample = new Sample('Babel');
sample.printHello();


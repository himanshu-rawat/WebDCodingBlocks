let a = 0;
var b = 1;
var c = a + b;
console.log(c);

function app() {
	return 7;
}
console.log(app());
this.a = 13;
this.b = 14;
module.exports = {
	Nfruit: this.a,
	Pfruit: this.b
};

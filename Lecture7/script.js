// // Default Binding
// var x = 7;
// function fruit() {
// 	var x = 9;
// 	function apple() {
// 		var x = 6;
// 		console.log(this.x); // Here Default Binding Plays the Important Role
// 	}
// 	apple();
// }
// fruit();

// var edge = {
// 	device: 'mobile',
// 	characteristics: 'pixel',
// 	dev: function() {
// 		console.log(this);
// 	}
// };
// var edgeX = {
// 	device: 'mobile',
// 	characteristics: 'iPhone'
// };
// function device() {
// 	console.log(this);
// }
// device();
// edge.dev();
// device.call(edgeX);

function Suuper() {
	this.fruit = 'apple';
	this.price = 24;
	return this76;
}
var a = new Suuper();
console.log(a);

// function shop(a, b, gst) {
// 	console.log(a + b + gst());
// }

// shop(2, 58, function() {
// 	return 10;
// });

function foo() {
	let x = 34;

	function bar() {
		console.log(x);
	}
	return bar();
}

let baz = foo();
console.log(baz);

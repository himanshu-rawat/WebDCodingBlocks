var slip = true;
function getBurger() {
	return new Promise(function(resolve, reject) {
		if (slip) {
			var data = {};
			data.burger = 'mc veg';
			resolve(data);
		} else {
			reject('Wrong slip');
		}
	});
}
function getDrink(data) {
	return new Promise(function(resolve, reject) {
		if (slip) {
			data.drink = 'sprite';
			resolve(data);
		} else {
			reject('Wrong slip');
		}
	});
}
function getPrice(data) {
	var price = 0;
	return new Promise(function(resolve, reject) {
		if (data.burger == 'mc veg') {
			price += 10;
		}
		if (data.drink == 'sprite') {
			price += 5;
		}

		resolve(price);
	});
}

getBurger()
	.then(getDrink)
	.then(getPrice)
	.then(function(data) {
		console.log(data);
	})
	.catch(function(data) {
		console.log(data);
	});

// main();
console.log('Bye');
// function getImage() {
// 	console.log('Image received...');
// 	console.log('Processing');
// 	splitImage(function(pixels) {
// 		console.log('First command to magnify');
// 		magnifyPixels(function(cb) {
// 			console.log('Magnifying ...');
// 			cb(pixels + 2);
// 		});
// 	});

// 	Enhancement();
// }

// function magnifyPixels(pixelfn) {
// 	console.log('Magnify the splitting pixels');
// 	pixelfn(function(pixel) {
// 		console.log(pixel);
// 	});
// }

// function splitImage(cb) {
// 	setTimeout(function() {
// 		console.log('splitting Image');
// 		console.log('Splitting Done');
// 		cb(250);
// 	}, 0);
// }

// function Enhancement() {
// 	console.log('Enhancing Image');
// }

// getImage();

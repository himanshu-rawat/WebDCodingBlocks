function getImage() {
	console.log('Image Received...');
	console.log('Processing ');
	splitImage(function(pixels) {
		console.log('First Command To Magnify');
		magnifyPixels(function(cb) {
			console.log('Magnifying');
			cb(pixels + 2);
		});
	});
	Enhancement();
}

function magnifyPixels(pixelfn) {
	console.log('Magnifying The  splitting Pixels');
	pixelfn(function(pixel) {
		console.log(pixel);
	});
	console.log('The magnified pixels is ' + pixel);
}
function splitImage(cb) {
	setTimeout(function() {
		console.log('splitting Image');
		console.log('splitting Done');
		cb(250);
	}, 0);
}
function Enhancement() {
	console.log('Enchancing Image');
}

getImage();

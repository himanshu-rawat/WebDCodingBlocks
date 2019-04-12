function getImage() {
	console.log('Image Received...');
	console.log('Processing ');
	splitImage(function(pixels) {
		magnifyPixels(pixels);
	});
	Enhancement();
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
function magnifyPixels(pixels) {
	console.log('Magnifying The Pixels');
	pixels = 2 + pixels;
	console.log('The magnified pixels is ' + pixels);
}

getImage();

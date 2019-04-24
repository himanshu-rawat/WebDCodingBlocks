function calcTime(valInMin) {
	if (valInMin >= 0 && valInMin <= 5) {
		return 0;
	} else if (valInMin >= 5 && valInMin <= 15) {
		return 1;
	} else {
		return 2;
	}
}

module.exports = {
	price: price
};

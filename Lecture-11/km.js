function price(valInKm) {
	if (valInKm >= 0 && valInKm <= 5) {
		return 10;
	} else if (valInKm >= 5 && valInKm <= 15) {
		return 15;
	} else {
		return 20;
	}
}

module.exports = {
	price: price
};

const expres = require('express');
const app = expres();
const port = process.env.PORT || 5000;
const db = require('./db');

app.get('/todolist', (req, res) => {
	// Database Data
	db.fetchList((data) => {
		res.send(data);
	});
});

app.listen(port, () => {
	console.log(`Working on port ${port}`);
	db.connectDb();
});

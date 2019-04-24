const mysql = require('mysql');

var connection = '';

function connectDb() {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'todolist'
	});
	connection.connect();
}
function fetchList(cb) {
	connection.query('Select *from courses', function(err, result) {
		if (err) throw err;
		cb(result);
	});
}
module.exports = {
	connectDb,
	fetchList
};

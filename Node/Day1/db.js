const MongoDb = require('mongodb').MongoClient;
const url = `mongodb+srv://Himanshu:asdf1234@cluster0-4dx9r.mongodb.net/test?retryWrites=true`;
let collection = '';
const dbName = 'todolist';

function connect() {
	MongoDb.connect(url, function(err, client) {
		console.log('Connected Successfully to server ');
		const db = client.db(dbName);
		collection = db.collection('todocollection');
	});
}

function insertDocs(task, cb) {
	collection.insertMany([ { a: task } ], function(err, result) {
		console.log(result);
		cb();
	});
}
module.exports = {
	connect: connect,
	insertDocs: insertDocs
};

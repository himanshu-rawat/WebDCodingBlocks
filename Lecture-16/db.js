const MongoDb = require('mongodb').MongoClient;
const url = `mongodb+srv://Himanshu:asdf1234@cluster0-4dx9r.mongodb.net/test?retryWrites=true`;
let collection = '';
const dbName = 'todolist';

function connect() {
	MongoDb.connect(url, function(err, client) {
		if (err) {
			console.error('An error occurred connecting to MongoDB: ', err);
		} else {
			console.log('Connected successfully to server');
			const db = client.db(dbName);
			collection = db.collection('todocollection');
		}

		// insertDocs();
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
// const MongoDb = require('mongodb').MongoClient;
// // const assert = require('assert');

// const url = 'mongodb+srv://Himanshu:asdf@1234@cluster0-4dx9r.mongodb.net/test?retryWrites=true';
// // const url = 'mongodb://localhost:27017';

// let collection = '';
// // Database Name
// const dbName = 'todolist';

// // Use connect method to connect to the server
// function connect() {
// 	MongoDb.connect(url, function(err, client) {
// 		console.log('Connected successfully to server');
// 		const db = client.db(dbName);
// 		collection = db.collection('todocollection');
// 		insertDocs();
// 	});
// }

// function insertDocs() {
// 	collection.insertMany([ { a: 1 }, { b: 1 }, { c: 1 } ], function(err, result) {
// 		console.log(result);
// 	});
// }

// module.exports = {
// 	connect
// };

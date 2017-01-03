/**
 * DB Connection
 */

'use strict';

/* Requires ------------------------------------------------------------------*/

const Mongo = require('mongodb').MongoClient;

/* Local variables -----------------------------------------------------------*/

let client;

/* Init ----------------------------------------------------------------------*/

Mongo.connect("mongodb://localhost:27017/inventory", (err, db) => {
	client = db;

	db.collection('product', { strict: true }, (err) => {
		if (err) {
			db.createCollection('product', (err, collection) => {
				collection.createIndex('template');
			});
		}
	});

	db.collection('template', { strict: true }, (err) => {
		if (err) {
			db.createCollection('template', (err, collection) => {
				collection.createIndex('category');
			});
		}
	});

	db.createCollection('category');
});

function find(collection, where, callback) {
	client.collection(collection).find(where).toArray(callback);
}

function create(collection, body, callback) {
	client.collection(collection).insert(body, { w:1 }, callback);
}

function update(collection, where, body, callback) {
	client.collection(collection).update(where, body, { w:1 }, callback);
}

/* Exports -------------------------------------------------------------------*/

module.exports = { find, create, update };
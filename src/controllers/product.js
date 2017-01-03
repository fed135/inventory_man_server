/**
 * Products
 */

'use strict';

/* Requires ------------------------------------------------------------------*/

const router = require('express').Router();
const db = require('../libs/db');

/* Routes --------------------------------------------------------------------*/

router.get('/template/:template_id', (req, res) => {
	db.find('product', { template: req.params.template_id }, (err, data) => res.json(data));
});

router.get('/', (req, res) => {
	db.find('product', null, (err, data) => res.json(data));
});

router.post('/', (req, res) => {
	db.insert('product', req.body, (err, data) => {
		res.status((err)?400:200);
		res.send(err || data);
	});
});

router.put('/:id', (req, res) => {
	db.update('product', {id: req.params.id }, req.body, (err, data) => {
		res.status((err)?400:200);
		res.send(err || data);
	});
});

/* Exports -------------------------------------------------------------------*/

module.exports = router;
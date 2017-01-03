/**
 * Entry point
 */

'use strict';

/* Requires ------------------------------------------------------------------*/

const express = require('express');

const template = require('./controllers/template');
const product = require('./controllers/product');

/* App -----------------------------------------------------------------------*/

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.disable('x-powered-by');

app.get('/status', (req, res) => res.send('ok'));

app.use('/template', template);
app.use('/product', template);

app.listen(3000, () => {});
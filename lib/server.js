'use strict';
const express = require('express');

let app = express();

app.use(function fileNotFound(req, res, next) {
  res.status(404).send('Not found');
});

app.listen(4040);

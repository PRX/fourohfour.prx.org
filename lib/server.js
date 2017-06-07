'use strict';
const express = require('express');

let app = express();

app.use(function fileNotFound(req, res, next) {
  console.log(`--------------------`);
  console.log(`Hostname: ${req.hostname}`);
  console.log(`URL: ${req.originalUrl}`);
  res.status(404).send('Not found');
});

app.listen(4040);

'use strict';
const express = require('express');

let app = express();

app.get('/ecs-health-check', function ecsHealthCheck(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send("If you're not a steak you don't belong here.");
});

app.use(function fileNotFound(req, res, next) {
  console.log(`--------------------`);
  console.log(`Hostname: ${req.hostname}`);
  console.log(`URL: ${req.originalUrl}`);
  res.status(404).send("If you're not a steak you don't belong here.");
});

app.listen(4040);

const express = require('express');
const mongoose = require('mongoose');
const winston = require('winston');
const prometheus = require('prom-client');
const { initTracer } = require('jaeger-client');

const logger = winston.createLogger({
  transports: [new winston.transports.File({ filename: 'app.log' })]
});

const app = express();
mongoose.connect('mongodb://mongo:27017/observability');

app.get('/', (req, res) => {
  logger.info('GET /');
  res.send('Hello Observability!');
});

app.listen(3000, () => logger.info('Server running on port 3000'));

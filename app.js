require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const { errors } = require('celebrate');

const routes = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const handleErrors = require('./middlewares/errorsHandler');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/bitfilmsdb');

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);
app.use(routes);

app.use(errorLogger);
app.use(errors());
app.use(handleErrors);

app.listen(PORT, () => {});

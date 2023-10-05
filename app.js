require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');

const { PORT = 3000, NODE_ENV, MONGODB_SERVER } = process.env;

const { MONGODB_SERVER_DEV } = require('./utils/config');

const cors = require('./middlewares/cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const rateLimiter = require('./middlewares/rateLimiter');
const routes = require('./routes/index');
const handleErrors = require('./middlewares/errorsHandler');

const app = express();

mongoose.connect(NODE_ENV === 'production' ? MONGODB_SERVER : MONGODB_SERVER_DEV);

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors);
app.use(helmet());

app.use(requestLogger);
app.use(rateLimiter);
app.use(routes);

app.use(errorLogger);
app.use(errors());
app.use(handleErrors);

app.listen(PORT, () => {});

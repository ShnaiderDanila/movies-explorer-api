const express = require('express');
const mongoose = require('mongoose');

const handleError = require('./middlewares/errorHandler');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/bitfilmsdb');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(handleError);

app.listen(PORT, () => {});

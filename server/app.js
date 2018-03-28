const express = require('express');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();

require('dotenv').config()
mongoose.connect('mongodb://reynaldi:12345@ds127139.mlab.com:27139/jepretgram')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use('/', index);

module.exports = app;

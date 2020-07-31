const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const bookingRoute = require('./routes/bookingRoutes');
app.use('/reservas', bookingRoute);

module.exports = app;




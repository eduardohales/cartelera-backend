const express = require('express');
const app = express();

// ----- Import all routes here -----
const indexRoute = require('../routes/index');
const userRoute = require('../routes/user');

// ----- Use all routes here -----
app.use(indexRoute);
app.use(userRoute);

module.exports = app;

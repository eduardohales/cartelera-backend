const express = require('express');
const app = express();

// ----- Import al routes here -----
const routes = require('../routes/index');
const userRouter = require('../routes/user');


// ----- Use all routes here -----
app.use(routes);
app.use(userRouter);

module.exports = app;

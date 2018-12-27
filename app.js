// Import configuration file.
const config = require('./config/config');

const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Load express configuration
config.expressConfig(app);

// Use all routes
app.use(require('./routes/routes'));

// ----- Database connection -----
mongoose.connect(config.database.urlDB, config.database.options).then(
    console.log('Connection to database successful'),
    (err) => {
        throw err;
    }
);

// ----- Run Server -----
const webserver = app.listen(config.server.port, () => {
   const port = webserver.address().port;
   console.log(`Server running on port ${port}`);
}).on('error', (err) => {
   throw new Error(`${err.errno}: Port ${config.server.port} is being used.`);
});


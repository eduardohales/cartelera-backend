// Import configuration file.
require('./config/config');

const express = require('express');
const app = express();

const routes = require('./routes/index');

app.use(routes);

const webserver = app.listen(process.env.PORT, () => {
   const port = webserver.address().port;
   console.log(`Server running on port ${port}`);
}).on('error', (err) => {
   throw new Error(`${err.errno}: Port ${process.env.PORT} is being used.`);
});
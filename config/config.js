const bodyParser = require('body-parser');

const config = {};

// ----- Server configuration -----
config.server = {
    port: 8080
};

// ----- Database configuration -----
config.database = {
    domain: 'localhost',
    name: 'nodejs-model-view-controller',
    port: '27017',
    options: {
        useNewUrlParser: true
    }
};
config.database.urlDB = `mongodb://${config.database.domain}:${config.database.port}/${config.database.name}`;

// ----- Express configuration -----
config.expressConfig = (app) => {
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    app.use(bodyParser.json());
};

module.exports = config;


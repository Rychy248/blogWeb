//jshint esversion:6
// https://getsimple.works/how-to-make-nodejs-applications-modular

// --------------------- IMPORTING ---------------------
// Server and config
const { express, app } = require("./config");

require("./routers/urls")(app, express);
require("./db")(app);
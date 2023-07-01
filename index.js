//jshint esversion:6
// https://getsimple.works/how-to-make-nodejs-applications-modular

// --------------------- IMPORTING ---------------------
// Server and config
const { express, app } = require("./config");

app.use("/", require("./routers/routerHome")(express));
app.use("/posts", require("./routers/routerPost")(express));
app.use("/compose", require("./routers/routerCompose")(express));

require("./db")(app);
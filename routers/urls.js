/**
 * 
 * @param { express.app } app the core app
 * @param { express } express the module express
 */
function urlFunction(app,express) {
    app.use("/", require("./routerHome")(express));
    app.use("/posts", require("./routerPost")(express));
    app.use("/compose", require("./routerCompose")(express));
};

module.exports = urlFunction;
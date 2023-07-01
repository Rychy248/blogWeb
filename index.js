//jshint esversion:6
// https://getsimple.works/how-to-make-nodejs-applications-modular

// --------------------- IMPORTING ---------------------

// PARTIAL GLOBAL VARIABLES
const { homeStartingContent } = require("./momentalData");
let { posts } = require("./momentalData");

// Server and config
const { express, app } = require("./config");

// TOOLS
const { capitalizeWord, getMatch, truncatePosts } = require("./tools");

app.use("/", require("./routers/routerHome")(express, homeStartingContent, truncatePosts(posts)));
app.use("/posts", require("./routers/routerPost")(express, capitalizeWord, getMatch, posts));
app.use("/compose", require("./routers/routerCompose")(express, capitalizeWord));

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

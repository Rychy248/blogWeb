
// --------------------- IMPORTING ---------------------
// Local modules
var path = require('path');

// Third part modules 
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// create app
const app = express();

// -------- MIDLEWARE
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"views"));

// bodyParser direct integration method insted of especific change
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"public")));

module.exports = { express, app}
//jshint esversion:6


// --------------------- IMPORTING ---------------------

// native modules//jshint esversion:6
var path = require('path');

// Third part modules 
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// Local modules

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";

const app = express();

// MIDLEWARE
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"views"));

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname,"public")));


// GLOBAL VARIABLES
let posts = [];


// IMPORT ROUNTING
const { homeRout } = require("./routerHome");
app.use("/", homeRout);
// app.get("/about",(req,res)=>{ res.render("about",{aboutContent:aboutContent}); });
// app.get("/contact",(req,res)=>{ res.render("contact",{contactContent:contactContent}); });
  
app.get("/",(req,res)=>{
  res.render("home",{homeStartingContent:homeStartingContent, posts:posts});
});


app.get("/compose",(req,res)=>{
  console.log(req.params.postId)
  res.render("compose");
});

app.post("/compose",(req,res)=>{
  posts.push({
    title:req.body.title,
      content:req.body.body,
    });
    
    res.redirect("/")
});
  
app.get("/posts/:postName",(req,res)=>{
  console.log(req.params.postName);
  res.send("Hello posts "+req.params.postName);
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});


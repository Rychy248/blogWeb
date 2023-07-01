
// MODEL FUNCTIONS
const { postRead } = require("../models/postModel");
const { homeRead, aboutRead, contactRead} = require("./../models/homeModel");

// utils import
const { truncatePosts } = require("../tools");

// HTTP METHODS, AND REPONSE
function homeGet(req,res,next){  
    res.render("home",{homeStartingContent:homeRead(), posts:truncatePosts(postRead())});
};

function aboutGet(req,res,next){
    res.render("about",{aboutContent:aboutRead()});
};

function contactGet(req,res,next){  
    res.render("contact",{contactContent:contactRead()});
};

module.exports = { homeGet, aboutGet, contactGet };

// MODEL FUNCTIONS
const { postRead } = require("../models/postModel");
const { homeRead, aboutRead, contactRead} = require("./../models/homeModel");

// utils import
const { truncatePosts } = require("../tools");

// HTTP METHODS, AND REPONSE
function homeGet(req,res,next){  
    let homeContent = "";

    homeRead()
    .then((result)=>{
        homeContent = result;
        return postRead();
    })
    .then((posts)=>{
        res.render("home",{homeContent:homeContent, posts:truncatePosts(posts)});
    })
    .catch(err=>{
        console.log(err);
    });
};

async function aboutGet(req,res,next){
    res.render("about",{aboutContent:await aboutRead()});
};

function contactGet(req,res,next){
    contactRead()
    .then((result)=>{
        res.render("contact",{contactContent:result});
    })
    .catch((err)=>{
        console.log("ERROR:");
        console.log(err);
    });
};

module.exports = { homeGet, aboutGet, contactGet };
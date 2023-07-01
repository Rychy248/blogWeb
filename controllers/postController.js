// models import
const { postRead }= require("../models/postModel")

// utils
const { capitalizeWord, getMatch} = require("../tools");

function postGet(req,res){
    let match = getMatch(postRead(),capitalizeWord(req.params.postName));
        
    if (match.matchedFlag) {
        res.render("post",{post:postRead()[match.index]})
    } else {
        console.log("Matched didn't found");
        res.render("postNotFound",{postSearched:capitalizeWord(req.params.postName)});
    };
};


module.exports = { postGet };
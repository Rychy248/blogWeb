
// models import
const { postCreate }= require("../models/postModel")

// utils import
const { capitalizeWord } = require("../tools");

function get(req,res) {
    res.render("compose");
};

function post(req,res,next) {
    postCreate({
        title:capitalizeWord(req.body.title),
        content:req.body.body,
    }).then((result)=>{
        console.log(result);
    });

    res.redirect("/");
};

module.exports = {get, post};
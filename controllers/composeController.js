
// models import
const { postRead } = require("../models/postModel");
// utils import
const { capitalizeWord } = require("../tools");

function get(req,res) {
    res.render("compose");
};

function post(req,res,next) {
    let posts = postRead();

    posts.push({
        title:capitalizeWord(req.body.title),
        content:req.body.body,
    });

    console.log(posts);
    res.redirect("/");
};

module.exports = {get, post};
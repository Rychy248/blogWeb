// models import
const { postRead, postUpdate, postDelete }= require("../models/postModel")

// utils
const { capitalizeWord } = require("../tools");

async function postGet(req,res){
    let match = await postRead({_id:req.params.postId})
    // let matchd = getMatch(postRead(),capitalizeWord(req.params.postId));
        
    if (match.length > 0) {
        res.render("post",{post:match[0]})
    } else {
        console.log("Matched didn't found");
        res.render("postNotFound",{postSearched:capitalizeWord(req.params.postId)});
    };
};

function postPut(req,res){
    let filter = {_id:req.body.id}
        update = {title:req.body.title,content:req.body.body}
    ;
    postUpdate(filter,update)
    .then(result=>res.json({result:result}))
    .catch((err)=>{
        res.json({
            postSearched:capitalizeWord(`ID: ${filter._id}, Title: ${update.title}`)
        });
    });
};

async function postDel(req,res){
    res.json({result:await postDelete({_id:req.body.id})});
};


module.exports = { postGet, postPut, postDel };
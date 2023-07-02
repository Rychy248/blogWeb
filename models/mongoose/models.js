
const mongoose = require(`mongoose`);

const homeSchema = new mongoose.Schema({
    section:{
        type:String,
        minLength:3,
        maxLength:60,
        require:[true,"Please give the name"]
    },
    content:{
        type:String,
        minLength:4,
        maxLength:900,
        require:[true,"Please give the content"]
    }
});

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        minLength:4,
        maxLength:60,
        require:[true,"Please give the Title post"]
    },
    content:{
        type:String,
        minLength:4,
        maxLength:900,
        require:[true,"Please give the content"]
    }
})

const homeModel = new mongoose.model("home",homeSchema);
const postModel = new mongoose.model("post",postSchema);

module.exports = { homeModel:homeModel, postModel:postModel };

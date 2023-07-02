// importing models and mongoose controller functions
const { postModel } = require("./mongoose/models");
const { create, read, del } = require("./mongoose/mongoController");
/**
 * 
 * @param { {title:"title",content:"content"} } document document to save
 * @returns 
 */
async function postCreate(document){
    return await create(postModel,document);
};

async function postRead(){
    return await read(postModel,{});
};

module.exports = { postRead, postCreate }
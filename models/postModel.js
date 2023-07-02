// importing models and mongoose controller functions
const { postModel } = require("./mongoose/models");
// REPLACED const { create, read, del } = require("./mongoose/mongoController");
/**
 * 
 * @param { {title:"title",content:"content"} } document document to save
 * @returns 
 */
async function postCreate(document){
    return await postModel.create(document);
};

async function postRead(query={}){
    return await postModel.find(query);
};

async function postUpdate(filter={},update={}){
    return await postModel.updateOne(filter,update);
};

async function postDelete(condition={}){
    return await postModel.deleteOne(condition);
};

module.exports = { postRead, postCreate, postUpdate, postDelete }
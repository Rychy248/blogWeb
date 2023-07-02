
// importing models and mongoose controller functions
const { homeModel } = require("./mongoose/models");
const { create, read, del, defaultHome } = require("./mongoose/mongoController");

// HTTP METHODS, AND REPONSE
async function homeRead(req,res,next){  
    let data = await read(homeModel,{section:"home"});
    if (data.length == 0){
        await defaultHome(homeModel);
        await homeRead(req,res,next);
    };

    return data[0];
};

async function aboutRead(req,res,next){
    return (await read(homeModel, {section:"about"}) )[0];
};

async function contactRead(req,res,next){  
    return (await read(homeModel, {section:"contact"}) )[0];
};

module.exports = { homeRead, aboutRead, contactRead};

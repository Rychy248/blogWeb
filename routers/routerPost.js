

function routerFunction(express) {
    // creating the router
    const postRouter = express.Router();

    // controller import
    const { postGet, postPut, postDel } = require("../controllers/postController");    

    // Espace to add a midleware
    postRouter.use(function(req,res,next){
        next();
    });

    let jsonParser = require("body-parser").json();
    // HTTP VERBS
    postRouter.get("/:postId",postGet);
    postRouter.put("/",jsonParser,postPut);
    postRouter.delete("/",jsonParser,postDel);

    return postRouter;
};

module.exports = routerFunction;
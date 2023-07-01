

function routerFunction(express) {
    // creating the router
    const postRouter = express.Router();

    // controller import
    const { postGet } = require("../controllers/postController");    

    // Espace to add a midleware
    postRouter.use(function(req,res,next){
        next();
    });
    
    // HTTP VERBS
    postRouter.get("/:postName",postGet);

    return postRouter;
};

module.exports = routerFunction;

function routerFunction(express) {
    
    // router define
    const composeRouter = express.Router();

    // Controller functions
    const {get, post} = require("./../controllers/composeController")
    
    // Here can add a midleware
    composeRouter.use(function(req,res,next){
        next();
    });

    // HTTP VERBS
    composeRouter.get("/",get);
    composeRouter.post("/",post);

    return composeRouter;
};

module.exports = routerFunction;
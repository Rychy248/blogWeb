

function routerFunction(express,capitalizeWord) {
    const composeRouter = express.Router();

    // Here can add a midleware
    composeRouter.use(function(req,res,next){
        next();
    });

    // HTTP VERBS
    composeRouter.get("/",(req,res)=>{
        console.log(req.params.postId)
        res.render("compose");
    });

    composeRouter.post("/",(req,res)=>{
        posts.push({
            title:capitalizeWord(req.body.title),
            content:req.body.body,
        });
        res.redirect("/")
    });

    return composeRouter;
};

module.exports = routerFunction;
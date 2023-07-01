
function routerFunction(express, capitalizeWord, getMatch,posts) {
    // creating the router
    const postRouter = express.Router();

    // Espace to add a midleware
    postRouter.use(function(req,res,next){
        next();
    });
    
    postRouter.get("/:postName",(req,res)=>{
        let match = getMatch(posts,capitalizeWord(req.params.postName));
        
        if (match.matchedFlag) {
            res.render("post",{post:posts[match.index]})
        } else {
            console.log("Matched didn't found");
            res.render("postNotFound",{postSearched:capitalizeWord(req.params.postName)});
        };
    });

    return postRouter;
};

module.exports = routerFunction;
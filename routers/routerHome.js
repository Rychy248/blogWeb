
// app.get("/about",(req,res)=>{ res.render("about",{aboutContent:aboutContent}); });
// app.get("/contact",(req,res)=>{ res.render("contact",{contactContent:contactContent}); });
// THE LAST TWO LINES REPLACED JUST BY ONE LINE, THE FOLLOW LINE
function routerFunction(express) {
    // router define
    const homeRout = express.Router();

    // Espace to add a midleware
    homeRout.use((req,res,next)=>{
        next();
    });
    // controller import
    const { homeGet, aboutGet, contactGet } = require("./../controllers/homeController");

    // HTTP METHODS, AND REPONSE
    homeRout.get("/",homeGet);
    homeRout.get("/about",aboutGet);
    homeRout.get("/contact",contactGet);

    return homeRout;
};

module.exports = routerFunction;
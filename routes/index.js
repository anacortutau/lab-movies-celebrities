const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//ruta de funcionalidades de movies

const moviesRouter = require("./movies.routes.js")
router.use("/movies", moviesRouter )


//ruta de funcionaldiades de celebrities
const celebritiesRouter = require("./celebrities.routes.js")
router.use("/celebrities", celebritiesRouter )







module.exports = router;

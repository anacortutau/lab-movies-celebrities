const  router  =  require ( "express" ).Router( ) ;


const CelebrityModel = require("../models/Celebrity.model.js");
const MovieModel = require("../models/Movie.model.js")

// GET "/movies/create"

router.get("/create",(req, res, next)=>{

    CelebrityModel.find()

    .then((allCelebrities)=>{

        res.render("movies/new-movie.hbs", {
            allCelebrities
        })

    })
    .catch((err)=>{
        next(err)
    })

   
})

router.post("/create", (req, res, next)=>{

    const {title, genre, plot, cast }= req.body

    MovieModel.create({
        title, 
        genre,
        plot,
        cast
    })
    .then((listMovie)=>{
        res.redirect("/movies")
    })

    .catch((err)=>{
        next(err)
    })
})

router.get("/",(req, res, next)=>{

    MovieModel.find()
    .then((allMovies)=>{

        res.render("movies/movies.hbs",{
            allMovies 
        })

    })
    .catch((err)=>{
        next(err)
    })


})

router.get("/:id", (req, res, next)=>{

    const {id} = req.params

    MovieModel.findById(id).populate("cast")

    .then((movie)=>{
        res.render("movies/movie-details.hbs",{
            movie
        })

        .catch((err)=>{
            next(err)
        })
    })


})







module.exports  =  router ;
const  router  =  require ( "express" ).Router( ) ;


const CelebrityModel = require("../models/Celebrity.model.js")

//crear la rutas => GET: "/celebrities/create" => mostrar un formulario para crear una celebridad

router.get("/create",(req, res, next)=>{
        res.render("celebrities/new-celebrity.hbs")
   
})

router.post("/create", (req, res, next)=>{

    const {name, occupation, catchPhrase} = req.body

    CelebrityModel.create({
        name, 
        occupation,
        catchPhrase
    })
    .then((listCle)=>{
        res.redirect("/celebrities")
    })

    .catch((err)=>{
        next(err)
    })
})

router.get("/",(req, res, next)=>{

    CelebrityModel.find()
    .then((allCelebrities)=>{

        res.render("celebrities/celebrities.hbs",{
           allCelebrities 
        })

    })
    .catch((err)=>{
        next(err)
    })


})

module.exports  =  router ;
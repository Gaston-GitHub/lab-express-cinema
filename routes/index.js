const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.models')

/* GET home page */

router.get('/', (req, res, next) => {
    res.render('index');
})

router.get('/movies', (req, res, next) => {
     
    Movie.find({})
    .then((moviesFromDb) => {
        console.log('The received movies from the database: ', moviesFromDb);
        res.render('movies', {moviesFromDb})      
    }) 
    .catch((err) => console.log(err))  
})

router.get('/movies/:id', (req, res, next) => {
    const {id} = req.params;
    Movie.findById(id)
    .then((movie) => {
        console.log(movie);
        res.render('movieInfo', {movie})
    })
    .catch((err) => console.log(err));

})



module.exports = router;


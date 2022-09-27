const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');
const bookUrl = 'https://www.googleapis.com/books/v1/volumes';
const placeholder = 'https://via.placeholder.com/150';
require('dotenv').config();
const axios = require('axios');

//routes
router.get('/', (req, res) => {
    res.render('books/index');
})


router.post('/detailspassthrough', async (req, res) => {
    let book = JSON.parse(req.body.bookJSONstring);
    // console.log('*******BOOOK*******', book) ;
    const theCoffees = await db.coffee.findAll();
    const randomIndex = Math.floor(Math.random() * theCoffees.length);
    // console.log('LOOOOOOOOK******', randomIndex);
    const coffeeRecommend = theCoffees[randomIndex];

    res.render('books/details', { book, coffee: coffeeRecommend });
})

router.get('/details', async (req, res) => {


    res.render('books/details', { book: JSON.parse(req.body.bookJSONstring) });
})


// router.get('/new', (req, res) => {
//     let books = {
//         params: { q: req.body.search },
//                 apikey: process.env.API_KEY
//     };
//     axios.get(bookUrl, books)
//     .then(function (response) {
//         // console.log(response.data)
//         res.redirect()
//     })
// });
router.post('/new', async (req, res) => {
    console.log('NEWWWWW STUFFFF', req.body);
    const newBook = await db.Book.create({
        title: req.body.title,
        author: req.body.author,
        img: req.body.img,
        description: req.body.description,
        userId: parseInt(req.body.userId),
        categories: req.body.categories
    })
    console.log(newBook.toJSON());
    res.redirect('../profile');
})

router.post('/results', async (req, res) => {
    console.log('>>>>SEARCH DATA', req.body.search);
    // we have user input search
    // make request to the api with that search
    const options = {
        params: {
            q: req.body.search,
            maxResults: 40,
        },
        // headers: {
        //     apikey: process.env.API_KEY
        // }
    }

    const results = await axios.get(bookUrl, options);
    console.log(`Back with book results`);
    console.log(results.data.items);
    // console.log(results.data.items[0].volumeInfo.thumbnail);

    //render the books/results on page
    res.render('books/results', { books: results.data.items })

});

router.delete('/:id', async (req, res) => {
    let booksDeleted = await db.Book.destroy({
        where: { id: req.params.id }
    });
    console.log('*********DELETE ROUTE**********');

    res.redirect('/books');
});

router.get('/*', (req, res) => {
    res.render('404')
});

module.exports = router;
const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');
const bookUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
const placeholder = 'https://via.placeholder.com/150';
require('dotenv').config();
const axios = require('axios');

//routes
router.get('/', (req, res) => {
    let books = await.db.book.findAll();
    books = books.map(b => b.JSON());
    console.log(books);
    res.render('books/index', { books: books });
})

router.get('/search', (req, res) => {
    res.render('books/index');
});

router.get('/:id', async (req, res) => {
    let book = await db.book.findOne({
        where: { id:req.params.id}
    });
    book = book.toJSON();
    console.log('=====this is the show route====');
    console.log(book);
    res.render('books/show', {book: book});
})

router.post('/new', async (req, res) => {
    console.log('*****/new', req.body);
    const newBook = await db.book.create({
        title: req.body.title,
        author: req.body.authors,
        img: req.body.img,
        description: req.body.description,
        userId: parseInt(req.body.userId)
    });
    console.log(newbook.toJSON());
    res.redirect('/books');
});

router.post('/results', async (req, res) => {
    console.log('>>>>SEARCH DATA', req.body);
    const options = {
        method: 'GET',
        url: bookUrl,
        params: { q: req.body.search },
        headers: {
            
        }

    }
})


















module.exports = router;
const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');
require('dotenv').config();
const axios = require('axios');

//show route to catalog of coffees to purchase
router.get("/", async (req, res) => {
    db.coffee.findAll()
      .then(coffees => {
        res.render('shop/index', {
          coffs: coffees,
          pageTitle: 'Shop'
        });
      })
      .catch(err => console.log(err));
      });

  //route to show details for coffees
  router.get('/product-detail/:id', (req, res) => {
    const coffId = req.params.id;
    db.coffee.findByPk(coffId)
    .then((coffee) => {
      res.render('shop/product-detail', {
        coffee: coffee,
        pageTitle: coffee.name,
        path: '/coffees'
      });
    })
    .catch(err => console.log(err));
  });

  

  router.get('/*', (req, res) => {
    res.render('404')
});

module.exports = router;
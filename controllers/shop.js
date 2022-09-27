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
  router.get('/detail/:id', (req, res) => {
    const coffId = req.params.id;
    db.coffee.findByPk(coffId)
    .then((coffee) => {
      res.render('shop/detail', {
        coffee: coffee,
        pageTitle: coffee.name,
      });
    })
    .catch(err => console.log(err));
  });

  router.get('/cart', (req, res) => {
    req.user.getCart()
    .then(cart => {
      return cart.getCoffees()
    })
    .then(coffees => {
      res.render('shop/cart', {
        pageTitle: 'Cart',
        coffees: coffees
      })
    })
    .catch(err => console.log(err));
  });

  router.post('/cart', (req, res) => {
    const coffId = req.body.coffeeId;
    let fetchedCart;
    let newQty = 1;
    req.user
      .getCart()
      .then(cart => {
        fetchedCart = cart;
        return cart.getCoffees({
          where: {
            id: coffId
          }
        });
      })
      .then(coffees => {
        let coffee;
        if (coffees.length > 0) {
          coffee = coffees[0];
        }
        if (coffee) {
          const oldQty = coffee.cartItem.quantity;
          newQty = oldQty +1;
          return coffee;
        } else {
          return coffee.findByPk(coffId);
        }
      })
      .then((coffee) => {
        return fetchedCart.addCoffee(coffee, {
          through: {
            quantity: newQty
          }
        });
      })
      .then(() => res.redirect('/cart'))
      .catch(err => console.log(err));
  });



// router.get('/*', (req, res) => {
//     res.render('404')
//   });

module.exports = router;
const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/product/:id', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('product');
});

router.get('/product/create', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('create-product');
});

router.get('/product/edit/:id', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('create-product', {
    productId: req.params.id
  });
});

router.get('/category/create', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('create-category');
});

router.get('/category/edit/:id', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('create-category', {
    productId: req.params.id
  });
});

module.exports = router;

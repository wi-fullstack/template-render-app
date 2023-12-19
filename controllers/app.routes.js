const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/product/:id', (req, res) => {
  res.render('product', {
    productId: req.params.id
  });
});

router.get('/product/create', withAuth,(req, res) => {
  res.render('create-product');
});

router.get('/product/edit/:id', withAuth,(req, res) => {

  res.render('create-product', {
    productId: req.params.id
  });
});

router.get('/category/create', withAuth,(req, res) => {
  res.render('create-category');
});

router.get('/category/edit/:id', withAuth,(req, res) => {
  res.render('create-category', {
    categoryId: req.params.id
  });
});

module.exports = router;

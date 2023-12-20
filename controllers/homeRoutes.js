const router = require('express').Router();
const { User, Product } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll();
    const products = productData.map((product) => product.get({ plain: true }));

    // Create productRows array
    let productRows = [];
    for (let i = 0; i < products.length; i += 5) {
      productRows.push(products.slice(i, i + 5));
    }

    res.render('homepage', {
      logged_in: req.session.logged_in,
      productRows: productRows
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/product/:id', async (req, res) => {
  try{
    const productData = await Product.findByPk(req.params.id);
    const product = productData.get({ plain: true });
    res.render('product', {
      product: product,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }

});

// Use withAuth middleware to prevent access to route
router.get('/profile', async (req, res) => {
  try {
    const userData = await User.findByPk('1', {
      attributes: { exclude: ['password'] },
      include: [{ model: Product }] //include user's products
    });

    const user = userData.get({ plain: true });

    let productRows = [];
    for (let i = 0; i < user.Products.length; i += 5) {
      productRows.push(user.Products.slice(i, i + 5));
    }

    res.render('profile', {
      ...user,
      logged_in: true,
      productRows: productRows // Send productRows to the render function
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;

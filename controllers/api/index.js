const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./category.router');
const productRoutes = require('./product.router');
const shopRoutes = require('./shop.router');

router.use('/users', userRoutes);
router.use('/category', categoryRoutes);
router.use('/product', productRoutes);
router.use('/shop', shopRoutes);

module.exports = router;

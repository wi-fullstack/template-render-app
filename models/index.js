const User = require('./User');
const Category = require('./category.model')
const Product = require('./product.model')

Category.belongsToMany(Product, { through: 'category_product' });
Product.belongsToMany(Category, { through: 'category_product' });

module.exports = { User, Category, Product };

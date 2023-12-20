const User = require('./User');
const Category = require('./category.model');
const Product = require('./product.model');

User.hasMany(Product, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Product.belongsTo(User, {
  foreignKey: 'user_id'
});

Category.belongsToMany(Product, { through: 'category_product' });
Product.belongsToMany(Category, { through: 'category_product' });

module.exports = { User, Category, Product };
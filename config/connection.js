const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('shop_render_db', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;

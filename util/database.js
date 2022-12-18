const Sequelize = require('sequelize');

const sequelize = new Sequelize('b_a3_t5', 'root', '1qaz2wsx3edc', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;

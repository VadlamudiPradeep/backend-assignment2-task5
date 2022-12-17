const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  amount: Sequelize.STRING,
  description: {
    type: Sequelize.STRING,
    unique: true,
  },
  category : {
    type : Sequelize.STRING,
    unique: true,
  }
});
// const User = sequelize.define('user', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   },
//   name: Sequelize.STRING,
//   email: {
//     type: Sequelize.STRING,
//     unique: true,
//   },
//   phonenumber : {
//     type : Sequelize.STRING,
//     unique: true,
//   }
// });

module.exports = User;
// configurando o Sequelize
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('repertorio_bd', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;

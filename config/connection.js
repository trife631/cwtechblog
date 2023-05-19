const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = "mysql://ppo9v8wun7rnpadv:enlw57javpnz12ua@s29oj5odr85rij2o.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/k3ql2bslm3s9iubj"
  ? new Sequelize("mysql://ppo9v8wun7rnpadv:enlw57javpnz12ua@s29oj5odr85rij2o.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/k3ql2bslm3s9iubj")
  : new Sequelize('tech_blog_db', process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      username: 'root', 
      password: 'root',
      dialect: 'mysql',
      port: 3306
    });

module.exports = sequelize;
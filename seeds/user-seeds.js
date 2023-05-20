const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'almostthere',
    email: 'gmail.com',
    password: 'password789'
  },
  {
    username: 'pleasejehovahhelp7',
    email: 'gmail.com',
    password: 'password789'
  },
  {
    username: 'brehbreh',
    email: 'gmail.com',
    password: 'password789'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;

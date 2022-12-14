const { User } = require('../models');

const userData = [
  {
    username: "Megan",
    email: "Megan@gmail.com",
    password: "password1234"
  },
  {
    username: "Ted",
    email: "ted@gmail.com",
    password: "password1234"
  },
  {
    username: "Tyler",
    email: "Tyler@gmail.com",
    password: "password1234"
  },

];

const seedUsers = () => User.bulkCreate(userData);

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;
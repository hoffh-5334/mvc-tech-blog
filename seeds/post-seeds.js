const { Post } = require('../models');

const postData = [
  {
    title: 'Sequelize',
    post_text: 'Sequelize has several data types that you can use to define a model. Most often are INTEGER and STRING for simple databases.',
    user_id: 1,
  },
  {
    title: 'Handlebars Templates',
    post_text: 'Handlebars. js is a Javascript library used to create reusable webpage templates. The templates are combination of HTML, text, and expressions. The expressions are included in the html document and surrounded by double curly braces.',
    user_id: 2,
  },
  {
    title: 'Handlebars Partials',
    post_text: 'Partials allow a user to create templates that are reusable and separate them into their own file and use different templates. Handlebars partials allow you to modularize templates.',
    user_id: 2,
  },

]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
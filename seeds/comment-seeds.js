const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Great info!",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "Super useful info, thanks!",
    post_id: 1,
    user_id: 3
  },
  {
    comment_text: "I didn't know what handlebars was, thanks for teaching me something today!",
    post_id: 2,
    user_id: 2
  },
  {
    comment_text: "I learned something new today!",
    post_id: 1,
    user_id: 2
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
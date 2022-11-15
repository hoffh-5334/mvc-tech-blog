const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Comment extends Model {}


Comment.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'post',
          key: 'id'
      }
    },
    comment_text: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: {
        //     len: [3]
        // }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    
  },

  {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'Comment'
  }
)

// Export the model
module.exports = Comment;
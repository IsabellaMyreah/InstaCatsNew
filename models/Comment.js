const {DataTypes} = require('sequelize')

const db = require('../db/conn');

const Publication = require('./Publication');
const User = require('./User')

const Comment = db.define("Comment", {
    comment:{
        type:DataTypes.STRING,
        allowNull: false,

    },
});

User.belongsToMany(Publication, { through: "Comment" });
Publication.belongsToMany(User, { through: "Comment" });

module.exports = Comment;
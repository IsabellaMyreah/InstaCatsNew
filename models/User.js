// 1° Importar DataTypes Sequelize
const {DataTypes} = require('sequelize')
const f = require('session-file-store')

// 2° Importar arquivo de connect database 
const db = require('../db/conn')

// 3° Estruturar essa tabela
const User  = db.define('User',{
    name:{
        type:DataTypes.STRING,
        allowNull: false,
        require:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false,
        require: true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        require: true

    }
});

module.exports = User
const {DataTypes}= require('sequelize');
const sequelize = require('../config/db');


const Product = sequelize.define('Product',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name:{ 
        type:DataTypes.STRING,
        allowNull:false 
    },
    price:{
        type:DataTypes.FLOAT,
        allowNull:false,
    },
    description:{
        type:DataTypes.STRING,
        allowNull:true,
    }
});

sequelize.sync()
.then(()=>{
    console.log('Product table created successfully!');
})
.catch(err=>{
    console.error('Unable to create table :',err);
});

module.exports= Product;
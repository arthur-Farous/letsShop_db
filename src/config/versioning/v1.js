const express = require('express');
const api = express.Router();
const users = require('../../routes/user');
const viewCart= require('../../routes/category')
const newProduct= require('../../routes/product')


api.get('/', (req, res) =>
  res.status(200).json({
    status: 'success',
    message: 'Welcome to My letShop Application API',
  })
);

api.use('/users', users);
api.use("/category" ,viewCart)
api.use("/product",newProduct)
module.exports = api;
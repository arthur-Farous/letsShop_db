const express= require('express')
const router= express.Router()
const {viewCart}= require('../controllers/category.controller')


router.post('/create', viewCart)

module.exports=router
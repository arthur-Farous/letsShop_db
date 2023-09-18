const express=require('express')

const router= express.Router()

const {newProduct}=require('../controllers/product.controller')
const {checkToken}=require('../middlewares/auth.middleware')

router.post('/newProduct',checkToken, newProduct)

module.exports=router
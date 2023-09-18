    
    const {addToCart}= require('../services/category.service')

 const viewCart= async(req,res,next)=>{
    try {
        const response= await addToCart(req.body)
        return res.status(response.code).json(response)
    } catch (error) {
        next(error)
    }
}

module.exports={viewCart}
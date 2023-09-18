const { createNewProduct } = require('../services/product.service');

const newProduct = async (req, res, next) => {
    try {
       
        const result = await createNewProduct(req.body);
        return res.status(result.code).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    newProduct,
};

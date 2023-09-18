
const { addNewProduct, findProductByTheName} = require('../queries/product');
const { runQuery } = require('../config/database.config');

const createNewProduct = async (body) => {
    const { name, price, quantity } = body;
    const productExist= await runQuery (findProductByTheName,[name])
    if (productExist.length > 0){
        // console.log(category)
        throw{
            code:409,
            message:'product already exist',
            data:null,
            status:'error'
        }
    } 
    const response = await runQuery(addNewProduct, [name,price,quantity])
    return {
        code: 201,
        status: 'success',
        message: 'New product added successfully',
        data:response
    }
}

    


module.exports = {
    createNewProduct,
};

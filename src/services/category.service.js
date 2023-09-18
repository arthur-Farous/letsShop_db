const {createCategory,findCategoryByName} =require('../queries/category')
const {runQuery}=require('../config/database.config')

const addToCart = async (body) => {
    const {name} = body
    const categoryExist= await runQuery (findCategoryByName,[name])
    if (categoryExist.length > 0){
        // console.log(category)
        throw{
            code:409,
            message:'category already exist',
            data:null,
            status:'error'
        }
    } 
    const response = await runQuery(createCategory, [name])
    return {
        code: 201,
        status: 'success',
        message: 'New category added successfully',
        data:response
    }
}


module.exports={
    addToCart
}
const addNewProduct=`
INSERT INTO products(
    name,
    price,
    quantity
)VALUES($1,$2,$3) RETURNING product_id, name, price,quantity
`
const findProductByTheName =`
 SELECT product_id, name,price, quantity FROM products WHERE name = $1
`;

module.exports={
    addNewProduct,
    findProductByTheName
    
}
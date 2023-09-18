const addUser = `
 INSERT INTO users (
    username
    email,
    password,
   
 )
 VALUES ($1, $2, $3, $4) RETURNING id, username,email, created_at
`;

const findUserByUsername = `
 SELECT id,username, password FROM users WHERE username =$1
`

const fetchAllUsers = `SELECT id,username,email FROM users`

const fetchUserById = `SELECT id,username FROM users WHERE id=$1`

module.exports ={
    addUser, 
    findUserByUsername,
    fetchAllUsers,
    fetchUserById
}


const axios = require('axios');
const users= require('../utils/users')


const login=(req, res)=>{

    const {email, password}= req.query;
    
    const findUser= users.find((user)=> user.email === email&& user.password === password);
   
    const access= findUser ? true : false;

    res.status(200).json({access});

}

module.exports= login;
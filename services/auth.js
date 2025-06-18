const jwt = require('jsonwebtoken');

function setUser(user){

    return jwt.sign({
        _id:user._id,
        email:user.email,
    },process.env.JWTkey);
}
function getUser(token){
    if(!token) return null;
    try{
        return jwt.verify(token,process.env.JWTkey); 
    }catch(error){
        console.log(error);
        return null;
    }
}

module.exports={

    setUser,
    getUser
}

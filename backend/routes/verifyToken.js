const jwt = require('jsonwebtoken');

//Verify Access Token
const verifyToken = (req,res,next)=>{
    const token = req.header('authorization');
    if(!token) return res.status(401).send("Access Denied");

    try{
        const verified = jwt.verify(token,process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }catch(error){
        return res.status(400).send("Invalid Token");
    }
}

module.exports = verifyToken; 
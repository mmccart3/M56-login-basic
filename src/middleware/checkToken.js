const jwt = require("jsonwebtoken");
const User = require("../db/models/users");

async function checkToken(req,res,next) {
    try {
        const token = req.header("Authorization").replace("Bearer ","");
        const privateKey = process.env.JWT_KEY;
        const decodedtoken = await jwt.verify(token,privateKey);
        console.log(decodedtoken);
        const userEmail = decodedtoken.email;
        const checkUserExists = await User.findOne({where:{email:userEmail}});
        if (checkUserExists === false) {
            throw new Error("User no longer in database")
        } else {
            req.body.email = userEmail;
            next()
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Token Check Failed",
            errorMessage: error
        })
        
    }
}

module.exports = checkToken
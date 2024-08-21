const jwt = require("jsonwebtoken");

async function login(req,res) {
    try {
        const expirationTime = 1000 * 60 * 60 * 24 * 7;
        const options = {
            expiresIn : expirationTime
        }
        const payload = {
            email : req.body.email,
            username: req.body.email
        }
        const privateKey = process.env.JWT_KEY;
        const token = jwt.sign(payload,privateKey,options);
        console.log(token);
        res.status(200).json({
            message:"JWT Token created",
            token: token,
            email: req.body.email
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "login error",
            errorMessage: error
        })
    }
}

module.exports = login
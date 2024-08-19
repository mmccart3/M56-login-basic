const User = require("../db/models/users");

async function registerUser(req,res) {
    try {
        const user = await User.create(
            {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }
        );
        res.status(201).send(`User ${req.body.username} has been created.`)
    } catch (error) {
        console.log(error);
        res.status(418).json({
            msg: "Database Error",
            error: error
        })
    }
}

module.exports = registerUser;
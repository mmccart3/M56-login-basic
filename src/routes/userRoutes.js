const {Router} = require("express");
const registerUser = require("../controllers/registerUser");

const userRouter = Router();

userRouter.post("/users/register", registerUser);

module.exports = userRouter;
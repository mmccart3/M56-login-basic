const {Router} = require("express");
const registerUser = require("../controllers/registerUser");
const hashPassword = require("../middleware/hashPasword");
const listUsers = require("../controllers/listUsers");
const checkPassword = require("../middleware/checkPassword");
const deleteUser = require("../controllers/deleteUser");
const updatePassword = require("../controllers/changePassword");
const login = require("../controllers/login");
const checkToken = require("../middleware/checkToken");

const userRouter = Router();

userRouter.post("/users/register",hashPassword, registerUser);
userRouter.get("/users/listUser",checkToken,listUsers);
userRouter.delete("/users/deleteUser",checkToken,deleteUser);
userRouter.put("/users/updatePassword",checkToken,updatePassword);
userRouter.post("/users/login",checkPassword,login);

module.exports = userRouter;
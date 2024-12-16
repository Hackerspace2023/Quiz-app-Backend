import express from "express"
import { loginUser, registerUser, userData } from "../Controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser)
router.get("/allUser", userData)
router.post("/login", loginUser)


export default router
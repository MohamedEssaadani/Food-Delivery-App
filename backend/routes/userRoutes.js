import express from "express"
import {
  authUser,
  getProfile,
  createUser,
} from "../controllers/userController.js"
import { protectRoutes } from "../middlewares/authMiddleware.js"

const router = express.Router()

//route for create new user
router.route("/").post(createUser)

//route for login
router.post("/login", authUser)

//route for get user profile
router.route("/profile").get(protectRoutes, getProfile)

export default router

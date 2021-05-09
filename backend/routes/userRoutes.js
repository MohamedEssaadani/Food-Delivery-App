import express from "express"
import {
  authUser,
  getUserProfile,
  updateUserProfile,
  createUser,
  getUsers,
} from "../controllers/userController.js"
import { adminProtect, protectRoutes } from "../middlewares/authMiddleware.js"

const router = express.Router()

//route for create new user
router.route("/").post(createUser).get(protectRoutes, adminProtect, getUsers)

//route for login
router.post("/login", authUser)

//route for get user profile
router
  .route("/profile")
  .get(protectRoutes, getUserProfile)
  .put(protectRoutes, updateUserProfile)

export default router

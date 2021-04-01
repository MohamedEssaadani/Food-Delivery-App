import express from "express"
import { createOrder, getUserOrders } from "../controllers/orderController.js"
import { protectRoutes } from "../middlewares/authMiddleware.js"

const router = express.Router()

router
  .route("/")
  .get(protectRoutes, getUserOrders)
  .post(protectRoutes, createOrder)

export default router

import express from "express"
import { createOrder, getUserOrders } from "../controllers/orderController"
import { protectRoutes } from "../middlewares/authMiddleware"

const router = express.Router()

router
  .route("/")
  .get(protectRoutes, getUserOrders)
  .post(protectRoutes, createOrder)

export default router

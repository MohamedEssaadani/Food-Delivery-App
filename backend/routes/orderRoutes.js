import express from "express"
import {
  createOrder,
  getOrderById,
  getUserOrders,
} from "../controllers/orderController.js"
import { protectRoutes } from "../middlewares/authMiddleware.js"

const router = express.Router()

router
  .route("/")
  .get(protectRoutes, getUserOrders)
  .post(protectRoutes, createOrder)

router.route("/:id").get(protectRoutes, getOrderById)

export default router

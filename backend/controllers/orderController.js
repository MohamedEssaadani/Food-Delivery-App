import asyncHandler from "express-async-handler"
import Order from "../models/order.js"

const getUserOrders = asyncHandler(async (req, res) => {
  if (req.user) {
    const orders = await Order.find({ user: req.user.userId })

    if (orders) {
      res.json(orders)
    } else {
      res.status(404)
      throw new Error("No Orders Found!")
    }
  } else {
    res.status(404)
    throw new Error("No User Found!")
  }
})

const createOrder = asyncHandler(async (req, res) => {})

export { getUserOrders, createOrder }

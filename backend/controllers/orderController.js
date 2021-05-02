import asyncHandler from "express-async-handler"
import Order from "../models/order.js"

const getUserOrders = asyncHandler(async (req, res) => {
  if (req.user) {
    const orders = await Order.find({ user: req.user._id }).sort("-createdAt")

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

//@desc Create Order
//@route POST /api/orders
//@access Private
const createOrder = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    shippingPrice,
    phoneNumber,
    totalPrice,
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error("No Items Found!")
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      shippingPrice,
      phoneNumber,
      totalPrice,
    })

    const createdOrder = await await Order.create(order)

    res.status(201).json(createdOrder)
  }
})

//@desc Get order by id
//@route GET /api/orders/:id
//@access Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  )

  if (order) {
    res.json(order)
  } else {
    res.status(404)
    throw new Error("Order not found!")
  }
})

export { getUserOrders, createOrder, getOrderById }

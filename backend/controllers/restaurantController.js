import asyncHandler from "express-async-handler"
import Restaurant from "../models/restaurant.js"

//@desc Fetch all restaurants
//@route /api/restaurants
//@access Public
const getRestaurants = asyncHandler(async (req, res) => {
  const restaurants = await Restaurant.find({})
  res.json(restaurants)
})

//@desc Fetch a single restaurant by Id
//@route /api/restaurants/:id
//@access Public
const getRestaurantById = asyncHandler(async (req, res) => {
  const id = req.params.id
  const restaurant = await Restaurant.findById(id)

  res.json(restaurant)
})

export { getRestaurants, getRestaurantById }

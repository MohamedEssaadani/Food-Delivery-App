import asyncHandler from "express-async-handler"
import Restaurant from "../models/restaurant.js"

//@desc Fetch all restaurants
//@route /api/restaurants
//@access Public

const getRestaurants = asyncHandler(async (req, res) => {
  const restaurants = await Restaurant.find({})

  res.json(restaurants)
})

export { getRestaurants }

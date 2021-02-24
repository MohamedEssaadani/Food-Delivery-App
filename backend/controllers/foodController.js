import Food from "../models/food.js"
import asyncHandler from "express-async-handler"

//@desc Get food list of a restaurant
//@route /api/restaurants/:id/food
//@access PUBLIC
const getFoodByRestaurant = asyncHandler(async (req, res) => {
  const food = await Food.find({
    restaurant: req.params.id,
  })

  res.json(food)
})

export { getFoodByRestaurant }

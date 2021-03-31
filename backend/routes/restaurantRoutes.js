import express from "express"
import {
  getRestaurants,
  getRestaurantById,
  getCities,
} from "../controllers/restaurantController.js"

import { getFoodByRestaurant } from "../controllers/foodController.js"

const router = express.Router()

router.get("/", getRestaurants)

router.get("/cities", getCities)

router.get("/:id", getRestaurantById)

router.get("/:id/foods", getFoodByRestaurant)

export default router

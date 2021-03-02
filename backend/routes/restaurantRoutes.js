import express from "express"
import {
  getRestaurants,
  getRestaurantById,
} from "../controllers/restaurantController.js"

import { getFoodByRestaurant } from "../controllers/foodController.js"

const router = express.Router()

router.get("/", getRestaurants)

router.get("/:id", getRestaurantById)

router.get("/:id/food", getFoodByRestaurant)

export default router

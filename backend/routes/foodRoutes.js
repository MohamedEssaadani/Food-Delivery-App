import express from "express"
import { getFoodById, getFoodList } from "../controllers/foodController.js"

const router = express.Router()

router.get("/", getFoodList)
router.get("/:id", getFoodById)

export default router

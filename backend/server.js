import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import restaurantRoutes from "./routes/restaurantRoutes"
import userRoutes from "./routes/userRoutes.js"

dotenv.config()

connectDb()

const app = express()

app.use("/api/restaurants", restaurantRoutes)

app.use("/api/users", userRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
})

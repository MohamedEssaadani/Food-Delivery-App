import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import restaurantRoutes from "./routes/restaurantRoutes.js"
import userRoutes from "./routes/userRoutes.js"

//load .env file to process.env
dotenv.config()

//connect to mongodb
connectDb()

const app = express()

//restaurants routes
app.use("/api/restaurants", restaurantRoutes)

//users routes
app.use("/api/users", userRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
})

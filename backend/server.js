import express from "express"
import dotenv from "dotenv"
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js"
import connectDb from "./config/db.js"
import restaurantRoutes from "./routes/restaurantRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import foodRoutes from "./routes/foodRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
//load .env file to process.env
dotenv.config()

//connect to mongodb
connectDb()

const app = express()

//to parse json
app.use(express.json())

//restaurants routes
app.use("/api/restaurants", restaurantRoutes)

//food routes
app.use("/api/foods", foodRoutes)

//users routes
app.use("/api/users", userRoutes)

//orders routes
app.use("/api/orders", orderRoutes)

//404 Error, if the url not found
app.use(notFound)

//Error Handling
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
})

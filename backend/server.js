import express from "express"
import restaurants from "./data/restaurants.js"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.get("/", (req, res) => {
  res.send(restaurants)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
})

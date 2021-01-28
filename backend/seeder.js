import Restaurant from "./models/restaurant.js"
import User from "./models/user.js"
import restaurants from "./data/restaurants.js"
import users from "./data/users.js"
import dotenv from "dotenv"
import connectDb from "./config/db.js"

//load .env content to process.env
dotenv.config()

//connect to db
connectDb()

const importData = async () => {
  try {
    //delete all users & restaurants if there is records in the db
    await User.deleteMany()
    await Restaurant.deleteMany()

    //create many users & get the array result
    const createdUsers = await User.insertMany(users)

    //get the id of the admin (first index)
    const admin = createdUsers[0]._id

    //add admin as user who created the restaurant to all restaurants
    const restaurantsList = restaurants.map((restaurant) => {
      return {
        ...restaurant,
        user: admin,
      }
    })

    //insert restaurants
    await Restaurant.insertMany(restaurantsList)

    console.log("Data Imported!")
    process.exit()
  } catch (error) {
    console.log(`Error while importing data: ${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Restaurant.deleteMany()
    await User.deleteMany()

    console.log("Data Destroyed")
    process.exit()
  } catch (error) {
    console.log(`Error while Destroying data: ${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === "-d") {
  destroyData()
} else {
  importData()
}

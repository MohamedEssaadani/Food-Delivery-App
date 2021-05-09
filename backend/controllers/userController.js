import User from "../models/user.js"
import asyncHandler from "express-async-handler"
import bcrypt from "bcryptjs"
import generateToken from "../utils/generateToken.js"

//@desc Authentification & Generate Token
//@route POST /api/users/login
//@access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error("Invalid Email or Password!")
  }
})

//@desc GET User Profile
//@route GET /api/users/profile
//@access Private
const getUserProfile = asyncHandler(async (req, res) => {
  if (req.user) {
    res.json({
      id: req.user.userId,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role,
    })
  } else {
    res.status(404)
    throw new Error("No User Found!")
  }
})

//@desc UPDATE User Profile
//@route PUT /api/users/profile
//@access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (req.user) {
    user.name = req.body.name || req.user.name
    user.email = req.body.email || req.user.email
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    })
  } else {
    res.status(404)
    throw new Error("No User Found!")
  }
})

//@desc Create new user
//@route POST /api/users
//@access public
const createUser = asyncHandler(async (req, res) => {
  //get values from request body
  const { name, email, password, role } = req.body

  //check if user exist
  const isExist = await User.findOne({ email })

  //if exist then throw error
  if (isExist) {
    res.status(400)
    throw new Error("User already exist!")
  }

  //create the user and get his informations
  const user = await User.create({
    name,
    email,
    password,
    role,
  })

  //if user created return his infos with ok status
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error("Invalid informations! ")
  }
})

//@desc GET Users
//@route GET /api/users
//@access Private
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

export { authUser, getUserProfile, createUser, updateUserProfile, getUsers }

import User from "../models/user.js"
import asyncHandler from "express-async-handler"
import bcrypt from "bcryptjs"
import generateToken from "../utils/generateToken.js"

//@desc Authentification & Generate Token
//@route /api/users/login
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

//@desc Get User Profile
//@route /api/users/profile
//@access Private
const getProfile = asyncHandler(async (req, res) => {
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

export { authUser, getProfile }

import bcrypt from "bcryptjs"

const users = [
  {
    name: "Mohamed Es-saadani",
    email: "essaadani80@gmail.com",
    password: bcrypt.hashSync("password", 10),
    role: "admin",
  },
  {
    name: "Hicham Es-saadani",
    email: "hicham@gmail.com",
    password: bcrypt.hashSync("password", 10),
    phone: "0690909090",
    role: "manager",
  },
  {
    name: "Jhon Doe",
    email: "doe@gmail.com",
    password: bcrypt.hashSync("password", 10),
    address: "Sala Al Jadida",
    phone: "0690909090",
    role: "client",
  },
]

export default users

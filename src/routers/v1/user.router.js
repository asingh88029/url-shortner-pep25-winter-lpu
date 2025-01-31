const express = require('express')
const {FetchAllUrlsOfTheUserUsingUserIdController} = require("./../../controllers/user.controller")

const UserRouter = express.Router()

UserRouter.get("/urls/:userId", FetchAllUrlsOfTheUserUsingUserIdController)

module.exports = UserRouter
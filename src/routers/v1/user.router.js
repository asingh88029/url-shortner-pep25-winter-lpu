const express = require('express')
const {FetchAllUrlsOfTheUserUsingUserIdController} = require("./../../controllers/user.controller")
const {AuthenticationMiddleware} = require('./../../middlewares/auth.middleware')

const UserRouter = express.Router()

UserRouter.get("/urls", AuthenticationMiddleware, FetchAllUrlsOfTheUserUsingUserIdController)

module.exports = UserRouter
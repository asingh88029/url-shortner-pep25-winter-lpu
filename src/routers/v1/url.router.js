const express = require('express')

const URLRouter = express.Router()

URLRouter.post("/new",(req, res)=>{
    console.log(req.url)
    res.send("ok")
})

URLRouter.get("/all",(req, res)=>{
    console.log(req.url)
    res.send("ok")
})

module.exports = {
    URLRouter
}
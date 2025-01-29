// const httpStatus = require("http-status")

const SignupController = async (req, res)=>{
    try{

        const {fullName, email, password} = req.body

        

        res.status(201).json({
            success : true
        })

    }catch(err){
        console.log(`Error in SignupController with err : ${err}`)
        res.status(err.statusCode ? err.statusCode : 500).json({
            success : false
        })
    }
}

const SigninController = async (req, res)=>{

}

module.exports = {
    SignupController,
    SigninController
}
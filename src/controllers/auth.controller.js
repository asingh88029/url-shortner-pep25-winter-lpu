// const httpStatus = require("http-status")
const {CheckEmailDomainIsPersonalOrNotUtil} = require("./../utils/auth.utils")
const {IsUserPresentUsingEmailService} = require("./../services/user.service")

const SignupController = async (req, res)=>{
    try{

        const {fullName, email, password} = req.body

        if(!fullName){
            const err = new Error("fullName is required in the body")
            err.statusCode = 400
            throw err
        }

        if(!email){
            const err = new Error("email is required in the body")
            err.statusCode = 400
            throw err
        }

        if(!password){
            const err = new Error("password is required in the body")
            err.statusCode = 400
            throw err
        }


        // TODO : if user is already present, then return error
        const IsUserPresentUsingEmailServiceResult = await IsUserPresentUsingEmailService(email)
        if(IsUserPresentUsingEmailServiceResult.success){
            const err = new Error("User already present")
            err.statusCode = 400
            throw err
        }

        const emailDomain = email.split("@")[1]

        console.log(emailDomain)

        const CheckEmailDomainIsPersonalOrNotUtilResult = CheckEmailDomainIsPersonalOrNotUtil(emailDomain)

        if(CheckEmailDomainIsPersonalOrNotUtilResult.success){
            // if email is personal email
            res.status(201).json({
                success : true,
                message : "Email is Personal"
            })
        }else{
            // if email is business/professional email

            // TODO1 : from email extract the organization domain and name


            // TODO2: check if organiztion is already created or not

            // TODO3 : if organization is already created for the user, then use the existing organization detail 
            // otherwise create new organization
            res.status(201).json({
                success : true,
                message : "Email is business"
            })

        }

        

    }catch(err){
        console.log(`Error in SignupController with err : ${err}`)
        res.status(err.statusCode ? err.statusCode : 500).json({
            success : false,
            message : err.message
        })
    }
}

const SigninController = async (req, res)=>{

}

module.exports = {
    SignupController,
    SigninController
}
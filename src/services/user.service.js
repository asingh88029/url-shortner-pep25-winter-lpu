const USERSModel = require("./../models/users.model")

const IsUserPresentUsingEmailService = async (email)=>{
    try{

        const user = await USERSModel.findOne({"email" : email}).exec()

        if(user){
            return {
                success : true,
                data : user
            }
        }else{
            throw new Error("Unable to get user details")
        }

    }catch(err){
        console.log(`Error in isUserPresentUsingEmailService with err : ${err}`)
        return {
            success : false
        }
    }
}

module.exports = {
    IsUserPresentUsingEmailService
}
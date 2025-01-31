const {IsUserPresentUsingUserIdService} = require("./../services/user.service")
const {GetURLsOfTheUserUsingUserIdService} = require("./../services/url.service")

const FetchAllUrlsOfTheUserUsingUserIdController = async (req, res)=>{
    try{

        const userId = req.userId

        if(!userId){
            const err = new Error("userId param is required")
            err.statusCode = 400
            throw err
        }

        // check if user is present or not, if not present throw err
        const IsUserPresentUsingUserIdServiceResult = await IsUserPresentUsingUserIdService(userId)
        if(!IsUserPresentUsingUserIdServiceResult.success){
            const err = new Error("User Invalid")
            err.statusCode = 404
            throw err
        }

        // fetch all the urls of the user and return back to client
        const GetURLsOfTheUserUsingUserIdServiceResult = await GetURLsOfTheUserUsingUserIdService(userId)
        if(!GetURLsOfTheUserUsingUserIdServiceResult.success){
            const err = new Error("Unable to fetch URLS")
            throw err
        }

        const {data: URLS} = GetURLsOfTheUserUsingUserIdServiceResult

        res.status(200).json({
            success : true,
            message : `${URLS.length} urls are found`,
            data : URLS
        })

    }catch(err){

        console.log(`Error in FetchAllUrlsOfTheUserUsingUserIdController with err : ${err}`)

        res.status(err.statusCode ? err.statusCode : 500).json({
            success : false,
            message : err.message
        })

    }
}

module.exports = {
    FetchAllUrlsOfTheUserUsingUserIdController,
}
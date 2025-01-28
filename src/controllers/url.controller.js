const {CreateNewURLService} = require("./../services/url.service")
const {GenerateUniqueIdForTheURLUtil} = require("./../utils/url.utils")

const CreateNewURLController = async (req, res)=>{
    try{

        const {originalURL} = req.body

        if(!originalURL){
            const err = new Error("originalURL is missing inside the body")
            err.statusCode = 400
            throw err
        }

        const keyId = GenerateUniqueIdForTheURLUtil(6)

        const CreateNewURLServiceResult = await CreateNewURLService(originalURL, keyId)

        if(!CreateNewURLServiceResult.success){
            const err = new Error("Unable to create new URL")
            err.statusCode = 500
            throw err
        }

        res.status(201).json({
            success : true,
            message : "New URL is created",
            data : CreateNewURLServiceResult.data
        })

    }catch(err){

        console.log(`Error in CreateNewURLController with err : ${err}`)

        res.status(err.statusCode ? err.statusCode : 500).json({
            success : false,
            message : err.message
        })

    }
}

module.exports = {
    CreateNewURLController
}
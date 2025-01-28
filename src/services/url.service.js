const URLSModel = require("./../models/urls.model")

async function CreateNewURLService(originalUrl, keyId){
    try{

        const result = await URLSModel.create({"originalUrl" : originalUrl, "keyId" : keyId})

        if(!result){
            throw new Error("unable to call URLSModel.create()")
        }

        return {
            success : true,
            data : result
        }

    }catch(err){

        console.log(`Error in CreateNewURLService for originalUrl : ${originalUrl} & keyId : ${keyId} `)

        return {
            success : false
        }

    }
}

module.exports = {
    CreateNewURLService
}
const ORGANIZATIONSModel = require("./../models/organizations.model")

const IsOrganizationPresentUsingOrgDomainService = async (organizationDomain)=>{
    try{

        const organization = await ORGANIZATIONSModel.findOne({domain : organizationDomain}).exec()

        if(organization){
            return {
                success : true,
                data : organization
            }
        }else{
            throw new Error(`Unable to get organization details for domain : ${organizationDomain}`)
        }

    }catch(err){
        console.log(`Error in isOrganizationPresentUsingOrgDomainService with err : ${err}`)
        return {
            success : false
        }
    }
}

module.exports = {
    IsOrganizationPresentUsingOrgDomainService
}
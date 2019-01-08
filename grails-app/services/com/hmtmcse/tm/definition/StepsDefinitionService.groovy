package com.hmtmcse.tm.definition

import com.hmtmcse.gs.GsApiActionDefinition
import com.hmtmcse.swagger.definition.SwaggerConstant
import com.hmtmcse.tm.Steps


class StepsDefinitionService {

    GsApiActionDefinition list() {
        GsApiActionDefinition gsApiActionDefinition = new GsApiActionDefinition<Steps>(Steps)
        gsApiActionDefinition.includeAllPropertyToResponse()
        gsApiActionDefinition.addRelationalEntityResponse("complexity")
        gsApiActionDefinition.reResponseData().addResponseProperty("id")
        gsApiActionDefinition.reResponseData().addResponseProperty("name")
        gsApiActionDefinition.addRelationalEntityResponse("todo")
        gsApiActionDefinition.reResponseData().addResponseProperty("id")
        gsApiActionDefinition.reResponseData().addResponseProperty("name")
        gsApiActionDefinition.addToWhereFilterProperty("id").enableTypeCast()
        return gsApiActionDefinition
    }

    GsApiActionDefinition create(){
        GsApiActionDefinition gsApiActionDefinition = new GsApiActionDefinition<Steps>(Steps)
        gsApiActionDefinition.addRequestProperty("name")
        gsApiActionDefinition.addRequestProperty("description")
        gsApiActionDefinition.addRequestProperty("reference")
        gsApiActionDefinition.addRequestProperty("uuid")
        gsApiActionDefinition.addRequestProperty("isLock").enableTypeCast()
        gsApiActionDefinition.addRequestProperty("startedMoment")
        gsApiActionDefinition.addRequestProperty("estimatedHour")
        gsApiActionDefinition.addRequestProperty("status")
        gsApiActionDefinition.addRequestProperty("jsonData")
        gsApiActionDefinition.addRequestProperty("otherInfo")
        gsApiActionDefinition.addRequestProperty("isDeleted").enableTypeCast()
        gsApiActionDefinition.addRequestProperty("complexity", SwaggerConstant.SWAGGER_DT_LONG)
                .setAlias("complexityId").required()
                .enableTypeCast()
        gsApiActionDefinition.addRequestProperty("todo", SwaggerConstant.SWAGGER_DT_LONG)
                .setAlias("todoId").required()
                .enableTypeCast()
        gsApiActionDefinition.successResponseAsData()
        return gsApiActionDefinition
    }

    GsApiActionDefinition update(){
        GsApiActionDefinition gsApiActionDefinition = new GsApiActionDefinition<Steps>(Steps)
        gsApiActionDefinition.addRequestProperty("name")
        gsApiActionDefinition.addRequestProperty("description")
        gsApiActionDefinition.addRequestProperty("startedMoment").enableTypeCast().setDateFormat("yyyy-MM-dd")
        gsApiActionDefinition.addToWhereFilterProperty("id").enableTypeCast()
        gsApiActionDefinition.allowedConditionOnlyEqual()
        gsApiActionDefinition.successResponseAsData()
        return gsApiActionDefinition
    }


    GsApiActionDefinition delete(){
        GsApiActionDefinition gsApiActionDefinition = new GsApiActionDefinition<Steps>(Steps)
        gsApiActionDefinition.addToWhereFilterProperty("id").enableTypeCast()
        gsApiActionDefinition.successResponseAsData()
        return gsApiActionDefinition
    }
}

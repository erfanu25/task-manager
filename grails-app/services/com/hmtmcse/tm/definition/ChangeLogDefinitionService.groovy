package com.hmtmcse.tm.definition

import com.hmtmcse.gs.GsApiActionDefinition
import com.hmtmcse.swagger.definition.SwaggerConstant
import com.hmtmcse.tm.ChangeLog

class ChangeLogDefinitionService {

    GsApiActionDefinition list() {
        GsApiActionDefinition gsApiActionDefinition = new GsApiActionDefinition<ChangeLog>(ChangeLog)
        gsApiActionDefinition.includeAllPropertyToResponse()
        gsApiActionDefinition.addRelationalEntityResponse("todo")
        gsApiActionDefinition.reResponseData().addResponseProperty("id")
        gsApiActionDefinition.reResponseData().addResponseProperty("name")
        return gsApiActionDefinition
    }

    GsApiActionDefinition details() {
        GsApiActionDefinition gsApiActionDefinition = new GsApiActionDefinition<ChangeLog>(ChangeLog)
        gsApiActionDefinition.includeAllPropertyToResponse()
        gsApiActionDefinition.addRelationalEntityResponse("todo")
        gsApiActionDefinition.reResponseData().addResponseProperty("id")
        gsApiActionDefinition.reResponseData().addResponseProperty("name")
        gsApiActionDefinition.addToWhereFilterProperty("id").enableTypeCast()
        return gsApiActionDefinition
    }

    GsApiActionDefinition create() {
        GsApiActionDefinition gsApiActionDefinition = new GsApiActionDefinition<ChangeLog>(ChangeLog)
        gsApiActionDefinition.addRequestProperty("name").required()
        gsApiActionDefinition.addRequestProperty("description")
        gsApiActionDefinition.addRequestProperty("uuid").required()
        gsApiActionDefinition.addRequestProperty("jsonData")
        gsApiActionDefinition.addRequestProperty("otherInfo")
        gsApiActionDefinition.addRequestProperty("todo", SwaggerConstant.SWAGGER_DT_LONG)
                .setAlias("todoId").required()
                .enableTypeCast()
        gsApiActionDefinition.successResponseAsData()
        return gsApiActionDefinition
    }

    GsApiActionDefinition update() {
        GsApiActionDefinition gsApiActionDefinition = new GsApiActionDefinition<ChangeLog>(ChangeLog)
        gsApiActionDefinition.addRequestProperty("name")
        gsApiActionDefinition.addRequestProperty("description")
        gsApiActionDefinition.addRequestProperty("uuid")
        gsApiActionDefinition.addRequestProperty("jsonData")
        gsApiActionDefinition.addRequestProperty("otherInfo")
        gsApiActionDefinition.addToWhereFilterProperty("id").enableTypeCast()
        gsApiActionDefinition.successResponseAsData()
        return gsApiActionDefinition
    }


    GsApiActionDefinition delete() {
        GsApiActionDefinition gsApiActionDefinition = new GsApiActionDefinition<ChangeLog>(ChangeLog)
        gsApiActionDefinition.addToWhereFilterProperty("id").enableTypeCast()
        gsApiActionDefinition.successResponseAsData()
        return gsApiActionDefinition
    }
}

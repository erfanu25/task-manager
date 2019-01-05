package com.hmtmcse.tm

import com.hmtmcse.gs.GsApiActionDefinition
import com.hmtmcse.swagger.definition.SwaggerConstant


class TodoDefinitionService {

    GsApiActionDefinition create(){
        GsApiActionDefinition gsApiActionDefinition = new GsApiActionDefinition<Todo>(Todo)
        gsApiActionDefinition.addRequestProperty("name").required()
        gsApiActionDefinition.addRequestProperty("dueDate").required().setErrorMessage("Need to specify Due Date.").enableTypeCast()
        gsApiActionDefinition.addRequestProperty("priority")
        gsApiActionDefinition.addRequestProperty("externalId")
        gsApiActionDefinition.addRequestProperty("todoType")
        gsApiActionDefinition.addRequestProperty("createdBy").setAlias("userId").required().enableTypeCast()

        gsApiActionDefinition.addRequestProperty("parentIssue", SwaggerConstant.SWAGGER_DT_LONG)
                .setAlias("parentIssueId")
                .enableTypeCast()

        gsApiActionDefinition.addResponseProperty("uuid")
        gsApiActionDefinition.addResponseProperty("id")

        gsApiActionDefinition.successResponseAsData()
        return gsApiActionDefinition
    }
}

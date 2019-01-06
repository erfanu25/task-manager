package com.hmtmcse.tm

import com.hmtmcse.gs.GsApiActionDefinition
import com.hmtmcse.gs.data.GsFilteredData
import com.hmtmcse.gs.model.RequestPreProcessor
import com.hmtmcse.swagger.definition.SwaggerConstant


class TodoDefinitionService {

    AuthenticationService authenticationService

    GsApiActionDefinition create(){
        GsApiActionDefinition gsApiActionDefinition = new GsApiActionDefinition<Todo>(Todo)
        gsApiActionDefinition.addRequestProperty("name").required()
        gsApiActionDefinition.addRequestProperty("dueDate").required().setErrorMessage("Need to specify Due Date.").enableTypeCast()
        gsApiActionDefinition.addRequestProperty("priority")
        gsApiActionDefinition.addRequestProperty("externalId")
        gsApiActionDefinition.addRequestProperty("todoType")
        gsApiActionDefinition.addRequestProperty("parentIssue", SwaggerConstant.SWAGGER_DT_LONG)
                .setAlias("parentIssueId")
                .enableTypeCast()
        gsApiActionDefinition.requestPreProcessor = new RequestPreProcessor() {
            @Override
            GsFilteredData process(GsFilteredData gsFilteredData) {
                gsFilteredData.gsParamsPairData.addToParams("createdBy", authenticationService.userInfo)
                return gsFilteredData
            }
        }
        gsApiActionDefinition.addResponseProperty("uuid")
        gsApiActionDefinition.addResponseProperty("id")
        gsApiActionDefinition.successResponseAsData()
        return gsApiActionDefinition
    }

}

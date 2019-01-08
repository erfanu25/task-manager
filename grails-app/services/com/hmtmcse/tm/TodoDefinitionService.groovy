package com.hmtmcse.tm

import com.hmtmcse.gs.GsApiActionDefinition
import com.hmtmcse.gs.data.GsApiResponseProperty
import com.hmtmcse.gs.data.GsFilteredData
import com.hmtmcse.gs.model.CustomResponseParamProcessor
import com.hmtmcse.gs.model.RequestPreProcessor
import com.hmtmcse.swagger.definition.SwaggerConstant


class TodoDefinitionService {

    AuthenticationService authenticationService

    GsApiActionDefinition create() {
        GsApiActionDefinition gsApiActionDefinition = new GsApiActionDefinition<Todo>(Todo)
        gsApiActionDefinition.addRequestProperty("name").required()setErrorMessage("Please Enter Valid Name.")
        gsApiActionDefinition.addRequestProperty("dueDate").required().setErrorMessage("Need to specify Due Date.").enableTypeCast().setDateFormat("yyyy-MM-dd")
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


    GsApiActionDefinition list() {
        GsApiActionDefinition gsApiActionDefinition = new GsApiActionDefinition<Todo>(Todo)
        gsApiActionDefinition.includeAllThenExcludeFromResponse(["isDeleted", "dateCreated", "lastUpdated"])

        gsApiActionDefinition.addRelationalEntityResponse("parentIssue")
        gsApiActionDefinition.reResponseData().addResponseProperty("uuid")
        gsApiActionDefinition.reResponseData().addResponseProperty("name")

        gsApiActionDefinition.addRelationalEntityResponse("createdBy")
        gsApiActionDefinition.reResponseData().addResponseProperty("uuid")
        gsApiActionDefinition.reResponseData().addResponseProperty("name")
        return gsApiActionDefinition
    }

    GsApiActionDefinition details() {
        GsApiActionDefinition gsApiActionDefinition = new GsApiActionDefinition<Todo>(Todo)
        gsApiActionDefinition.includeAllNotRelationalThenExcludeFromResponse(["isDeleted", "dateCreated", "lastUpdated"])

        gsApiActionDefinition.addResponseProperty("dueDate").customResponseParamProcessor = new CustomResponseParamProcessor() {
            @Override
            Object process(String fieldName, Object domainRow, GsApiResponseProperty propertyDefinition) {
                Date date = domainRow[fieldName]
                return date.format("yyyy-MM-dd")
            }
        }

        gsApiActionDefinition.addRelationalEntityResponse("parentIssue")
        gsApiActionDefinition.reResponseData().addResponseProperty("uuid")
        gsApiActionDefinition.reResponseData().addResponseProperty("name")

        gsApiActionDefinition.addRelationalEntityResponse("createdBy")
        gsApiActionDefinition.reResponseData().addResponseProperty("uuid")
        gsApiActionDefinition.reResponseData().addResponseProperty("name")

        gsApiActionDefinition.addToWhereFilterProperty('id').enableTypeCast()
        return gsApiActionDefinition
    }

    GsApiActionDefinition allDetails() {
        GsApiActionDefinition gsApiActionDefinition = details()

        def excludeFields = ["isDeleted", "dateCreated", "lastUpdated"]
        gsApiActionDefinition.addRelationalEntityResponse("complexity")
        gsApiActionDefinition.reResponseData().includeAllNotRelationalThenExcludeFromResponse(excludeFields)

        gsApiActionDefinition.addRelationalEntityResponse("assignee")
        gsApiActionDefinition.reResponseData().addResponseProperty("uuid")
        gsApiActionDefinition.reResponseData().addResponseProperty("name")

        gsApiActionDefinition.addRelationalEntityResponse("bug")
        gsApiActionDefinition.reResponseData().addResponseProperty("uuid")
        gsApiActionDefinition.reResponseData().addResponseProperty("name")

        gsApiActionDefinition.addRelationalEntityResponse("changeLog")
        gsApiActionDefinition.reResponseData().addResponseProperty("uuid")
        gsApiActionDefinition.reResponseData().addResponseProperty("name")

        gsApiActionDefinition.addRelationalEntityResponse("note")
        gsApiActionDefinition.reResponseData().addResponseProperty("uuid")
        gsApiActionDefinition.reResponseData().addResponseProperty("name")

        return gsApiActionDefinition
    }
}

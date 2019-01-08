package com.hmtmcse.tm.definition

import com.hmtmcse.gs.GsApiActionDefinition
import com.hmtmcse.swagger.definition.SwaggerConstant
import com.hmtmcse.tm.BugReport

class BugReportDefinitionService {

    GsApiActionDefinition list() {
        GsApiActionDefinition gsApiActionDefinition = new GsApiActionDefinition<BugReport>(BugReport)
        gsApiActionDefinition.includeAllPropertyToResponse()
        gsApiActionDefinition.addRelationalEntityResponse("parentIssue")
        gsApiActionDefinition.reResponseData().addResponseProperty("id")
        gsApiActionDefinition.reResponseData().addResponseProperty("name")
        gsApiActionDefinition.addRelationalEntityResponse("relatedIssue")
        gsApiActionDefinition.reResponseData().addResponseProperty("id")
        gsApiActionDefinition.reResponseData().addResponseProperty("name")
        gsApiActionDefinition.addRelationalEntityResponse("step")
        gsApiActionDefinition.reResponseData().addResponseProperty("id")
        gsApiActionDefinition.reResponseData().addResponseProperty("name")
        gsApiActionDefinition.addRelationalEntityResponse("reporter")
        gsApiActionDefinition.reResponseData().addResponseProperty("id")
        gsApiActionDefinition.reResponseData().addResponseProperty("name")
        return gsApiActionDefinition
    }

    GsApiActionDefinition details() {
        GsApiActionDefinition gsApiActionDefinition = new GsApiActionDefinition<BugReport>(BugReport)
        gsApiActionDefinition.includeAllPropertyToResponse()
        gsApiActionDefinition.addRelationalEntityResponse("parentIssue")
        gsApiActionDefinition.reResponseData().addResponseProperty("id")
        gsApiActionDefinition.reResponseData().addResponseProperty("name")
        gsApiActionDefinition.addRelationalEntityResponse("relatedIssue")
        gsApiActionDefinition.reResponseData().addResponseProperty("id")
        gsApiActionDefinition.reResponseData().addResponseProperty("name")
        gsApiActionDefinition.addRelationalEntityResponse("step")
        gsApiActionDefinition.reResponseData().addResponseProperty("id")
        gsApiActionDefinition.reResponseData().addResponseProperty("name")
        gsApiActionDefinition.addRelationalEntityResponse("reporter")
        gsApiActionDefinition.reResponseData().addResponseProperty("id")
        gsApiActionDefinition.reResponseData().addResponseProperty("name")
        gsApiActionDefinition.addToWhereFilterProperty("id").enableTypeCast()
        return gsApiActionDefinition
    }

    GsApiActionDefinition create() {
        GsApiActionDefinition gsApiActionDefinition = new GsApiActionDefinition<BugReport>(BugReport)
        gsApiActionDefinition.addRequestProperty("name").required()
        gsApiActionDefinition.addRequestProperty("description")
        gsApiActionDefinition.addRequestProperty("uuid").required()
        gsApiActionDefinition.addRequestProperty("status")
        gsApiActionDefinition.addRequestProperty("jsonData")
        gsApiActionDefinition.addRequestProperty("otherInfo")
        gsApiActionDefinition.addRequestProperty("bugType")
        gsApiActionDefinition.addRequestProperty("parentIssue", SwaggerConstant.SWAGGER_DT_LONG)
                .setAlias("parentIssueId").required()
                .enableTypeCast()
        gsApiActionDefinition.addRequestProperty("relatedIssue", SwaggerConstant.SWAGGER_DT_LONG)
                .setAlias("relatedIssueId").required()
                .enableTypeCast()
        gsApiActionDefinition.addRequestProperty("step", SwaggerConstant.SWAGGER_DT_LONG)
                .setAlias("stepId").required()
                .enableTypeCast()
        gsApiActionDefinition.addRequestProperty("reporter", SwaggerConstant.SWAGGER_DT_LONG)
                .setAlias("reporterId").required()
                .enableTypeCast()
        gsApiActionDefinition.successResponseAsData()
        return gsApiActionDefinition
    }

    GsApiActionDefinition update() {
        GsApiActionDefinition gsApiActionDefinition = new GsApiActionDefinition<BugReport>(BugReport)
        gsApiActionDefinition.addRequestProperty("name")
        gsApiActionDefinition.addRequestProperty("description")
        gsApiActionDefinition.addRequestProperty("uuid")
        gsApiActionDefinition.addRequestProperty("status")
        gsApiActionDefinition.addRequestProperty("jsonData")
        gsApiActionDefinition.addRequestProperty("otherInfo")
        gsApiActionDefinition.addRequestProperty("bugType")
        gsApiActionDefinition.addToWhereFilterProperty("id").enableTypeCast()
        gsApiActionDefinition.successResponseAsData()
        return gsApiActionDefinition
    }


    GsApiActionDefinition delete() {
        GsApiActionDefinition gsApiActionDefinition = new GsApiActionDefinition<BugReport>(BugReport)
        gsApiActionDefinition.addToWhereFilterProperty("id").enableTypeCast()
        gsApiActionDefinition.successResponseAsData()
        return gsApiActionDefinition
    }
}

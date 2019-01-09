package com.hmtmcse.tm.definition

import com.hmtmcse.gs.GsApiActionDefinition
import com.hmtmcse.gs.data.ApiHelper
import com.hmtmcse.gs.data.GsApiResponseData
import com.hmtmcse.gs.data.GsParamsPairData
import com.hmtmcse.gs.model.CustomProcessor
import com.hmtmcse.swagger.definition.SwaggerConstant
import com.hmtmcse.tm.Complexity
import com.hmtmcse.tm.ComplexityService

class ComplexityDefinitionService {

    ComplexityService complexityService

    GsApiActionDefinition list() {
        GsApiActionDefinition gsApiActionDefinition = new GsApiActionDefinition<Complexity>(Complexity)
        gsApiActionDefinition.includeAllPropertyToResponse()
        gsApiActionDefinition.addRelationalEntityResponse("todo")
        gsApiActionDefinition.reResponseData().addResponseProperty("id")
        gsApiActionDefinition.reResponseData().addResponseProperty("name")
        return gsApiActionDefinition
    }

   static GsApiActionDefinition detailsDefinition() {
        GsApiActionDefinition gsApiActionDefinition = new GsApiActionDefinition<Complexity>(Complexity)
        gsApiActionDefinition.includeAllNotRelationalThenExcludeFromResponse(DefinitionCommonService.commonSkipFields())
        return gsApiActionDefinition
    }

    GsApiActionDefinition details() {
        GsApiActionDefinition gsApiActionDefinition = detailsDefinition()
        gsApiActionDefinition.addRelationalEntityResponse("todo")
        gsApiActionDefinition.reResponseData().addResponseProperty("id")
        gsApiActionDefinition.reResponseData().addResponseProperty("name")
        gsApiActionDefinition.addToWhereFilterProperty("id").enableTypeCast()
        return gsApiActionDefinition
    }



    GsApiActionDefinition getDetailsByTodo() {
        GsApiActionDefinition gsApiActionDefinition = detailsDefinition()
        gsApiActionDefinition.addRequestProperty("todoId", SwaggerConstant.SWAGGER_DT_LONG).required().enableTypeCast()
        gsApiActionDefinition.customProcessor = new CustomProcessor() {
            @Override
            GsApiResponseData process(GsApiActionDefinition actionDefinition, GsParamsPairData paramData, ApiHelper apiHelper) {
                def complexity = complexityService.getAllComplexityByTodo(paramData.filteredGrailsParameterMap.todoId)
                return apiHelper.help.responseToApi(actionDefinition, complexity)
            }
        }
        gsApiActionDefinition.successResponseAsData([])
        return gsApiActionDefinition
    }


    GsApiActionDefinition create() {
        GsApiActionDefinition gsApiActionDefinition = new GsApiActionDefinition<Complexity>(Complexity)
        gsApiActionDefinition.addRequestProperty("name").required()
        gsApiActionDefinition.addRequestProperty("description")
        gsApiActionDefinition.addRequestProperty("reference")
        gsApiActionDefinition.addRequestProperty("startedMoment").enableTypeCast().setDateFormat("yyyy-MM-dd")
        gsApiActionDefinition.addRequestProperty("estimatedHour").enableTypeCast()
        gsApiActionDefinition.addRequestProperty("status")
        gsApiActionDefinition.addRequestProperty("jsonData")
        gsApiActionDefinition.addRequestProperty("otherInfo")
        gsApiActionDefinition.addRequestProperty("type")
        gsApiActionDefinition.addRequestProperty("taskType")
        gsApiActionDefinition.addRequestProperty("todo", SwaggerConstant.SWAGGER_DT_LONG)
                .setAlias("todoId").required()
                .enableTypeCast()
        gsApiActionDefinition.successResponseAsData()
        return gsApiActionDefinition
    }

    GsApiActionDefinition update() {
        GsApiActionDefinition gsApiActionDefinition = new GsApiActionDefinition<Complexity>(Complexity)
        gsApiActionDefinition.addRequestProperty("name")
        gsApiActionDefinition.addRequestProperty("description")
        gsApiActionDefinition.addRequestProperty("reference")
        gsApiActionDefinition.addRequestProperty("uuid").required()
        gsApiActionDefinition.addRequestProperty("startedMoment").enableTypeCast().setDateFormat("yyyy-MM-dd")
        gsApiActionDefinition.addRequestProperty("estimatedHour").enableTypeCast()
        gsApiActionDefinition.addRequestProperty("status")
        gsApiActionDefinition.addRequestProperty("jsonData")
        gsApiActionDefinition.addRequestProperty("otherInfo")
        gsApiActionDefinition.addRequestProperty("type")
        gsApiActionDefinition.addRequestProperty("taskType")
        gsApiActionDefinition.addToWhereFilterProperty("id").enableTypeCast()
        gsApiActionDefinition.successResponseAsData()
        return gsApiActionDefinition
    }


    GsApiActionDefinition delete() {
        GsApiActionDefinition gsApiActionDefinition = new GsApiActionDefinition<Complexity>(Complexity)
        gsApiActionDefinition.addToWhereFilterProperty("id").enableTypeCast()
        gsApiActionDefinition.successResponseAsData()
        return gsApiActionDefinition
    }

}

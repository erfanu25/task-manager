package com.hmtmcse.tm

import com.hmtmcse.gs.GsApiActionDefinition
import com.hmtmcse.gs.data.ApiHelper
import com.hmtmcse.gs.data.GsApiResponseData
import com.hmtmcse.gs.data.GsParamsPairData
import com.hmtmcse.gs.model.CustomProcessor
import com.hmtmcse.swagger.definition.SwaggerConstant


class CommonDefinitionService {

    GsApiActionDefinition dropDownConstant() {
        GsApiActionDefinition gsApiActionDefinition = new GsApiActionDefinition<Todo>(Todo)
        gsApiActionDefinition.customProcessor = new CustomProcessor() {
            @Override
            GsApiResponseData process(GsApiActionDefinition actionDefinition, GsParamsPairData paramData, ApiHelper apiHelper) {
                def map = [:]
                map.put("status", TMConstant.STATUS)
                map.put("priority", TMConstant.PRIORITY)
                map.put("complexityType", TMConstant.COMPLEXITY_TYPE)
                map.put("complexityTaskType", TMConstant.COMPLEXITY_TASK_TYPE)
                map.put("workLogType", TMConstant.WORK_LOG_TYPE)
                map.put("bugReportType", TMConstant.BUG_REPORT_TYPE)
                return GsApiResponseData.successResponse(map)
            }
        }
        gsApiActionDefinition.addResponseProperty("status").setDataType(SwaggerConstant.SWAGGER_DT_OBJECT)
        gsApiActionDefinition.addResponseProperty("priority").setDataType(SwaggerConstant.SWAGGER_DT_OBJECT)
        gsApiActionDefinition.addResponseProperty("complexityType").setDataType(SwaggerConstant.SWAGGER_DT_OBJECT)
        gsApiActionDefinition.addResponseProperty("complexityTaskType").setDataType(SwaggerConstant.SWAGGER_DT_OBJECT)
        gsApiActionDefinition.addResponseProperty("workLogType").setDataType(SwaggerConstant.SWAGGER_DT_OBJECT)
        gsApiActionDefinition.addResponseProperty("bugReportType").setDataType(SwaggerConstant.SWAGGER_DT_OBJECT)


        gsApiActionDefinition.successResponseAsData()
        return gsApiActionDefinition
    }
}

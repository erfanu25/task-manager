package com.hmtmcse.tm.controllers.api

import com.hmtmcse.gs.GsRestProcessor
import com.hmtmcse.tm.CommonDefinitionService

class ApiCommonV1Controller extends GsRestProcessor {

    CommonDefinitionService commonDefinitionService

    def getDropDownConstant() {
        return customProcessor(commonDefinitionService.dropDownConstant())
    }

}

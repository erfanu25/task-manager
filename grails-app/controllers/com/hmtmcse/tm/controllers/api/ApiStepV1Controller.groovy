package com.hmtmcse.tm.controllers.api

import com.hmtmcse.gs.GsRestProcessor
import com.hmtmcse.tm.definition.StepsDefinitionService

class ApiStepV1Controller extends GsRestProcessor {

    StepsDefinitionService stepsDefinitionService

    def postQuickCreate() {
        return create(stepsDefinitionService.create())
    }

    def postUpdate() {
        return update(stepsDefinitionService.update())
    }

    def getList() {
        return list(stepsDefinitionService.list())
    }

    def getDetails() {
        return details(stepsDefinitionService.list())
    }

    def deleteDelete() {
        return delete(stepsDefinitionService.delete())
    }


}

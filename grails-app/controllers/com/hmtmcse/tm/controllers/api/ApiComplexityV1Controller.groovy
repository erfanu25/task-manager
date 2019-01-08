package com.hmtmcse.tm.controllers.api

import com.hmtmcse.gs.GsRestProcessor
import com.hmtmcse.tm.definition.ComplexityDefinitionService

class ApiComplexityV1Controller extends GsRestProcessor {

    ComplexityDefinitionService complexityDefinitionService

    def postCreate() {
        return create(complexityDefinitionService.create())
    }

    def postUpdate() {
        return update(complexityDefinitionService.update())
    }

    def getList() {
        return list(complexityDefinitionService.list())
    }

    def getDetails() {
        return details(complexityDefinitionService.details())
    }

    def deleteDelete() {
        return delete(complexityDefinitionService.delete())
    }

}

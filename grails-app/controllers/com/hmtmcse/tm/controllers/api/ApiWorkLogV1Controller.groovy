package com.hmtmcse.tm.controllers.api

import com.hmtmcse.gs.GsRestProcessor
import com.hmtmcse.tm.definition.WorkLogDefinitionService

class ApiWorkLogV1Controller extends GsRestProcessor {

    WorkLogDefinitionService workLogDefinitionService

    def postQuickCreate() {
        return create(workLogDefinitionService.create())
    }

    def postUpdate() {
        return update(workLogDefinitionService.update())
    }

    def getList() {
        return list(workLogDefinitionService.list())
    }

    def getDetails() {
        return details(workLogDefinitionService.list())
    }

    def deleteDelete() {
        return delete(workLogDefinitionService.delete())
    }

}

package com.hmtmcse.tm.controllers.api

import com.hmtmcse.gs.GsRestProcessor
import com.hmtmcse.tm.definition.DataChangeHistoryDefinitionService

class ApiDateChangesHistoryV1Controller extends GsRestProcessor {

    DataChangeHistoryDefinitionService dataChangeHistoryDefinitionService

    def postCreate() {
        return create(dataChangeHistoryDefinitionService.create())
    }

    def postUpdate() {
        return update(dataChangeHistoryDefinitionService.update())
    }

    def getList() {
        return list(dataChangeHistoryDefinitionService.list())
    }

    def getDetails() {
        return details(dataChangeHistoryDefinitionService.details())
    }

    def deleteDelete() {
        return delete(dataChangeHistoryDefinitionService.delete())
    }

}

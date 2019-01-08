package com.hmtmcse.tm.controllers.api

import com.hmtmcse.gs.GsRestProcessor
import com.hmtmcse.tm.definition.ChangeLogDefinitionService

class ApiChangeLogV1Controller extends GsRestProcessor {

    ChangeLogDefinitionService changeLogDefinitionService

    def postCreate() {
        return create(changeLogDefinitionService.create())
    }

    def postUpdate() {
        return update(changeLogDefinitionService.update())
    }

    def getList() {
        return list(changeLogDefinitionService.list())
    }

    def getDetails() {
        return details(changeLogDefinitionService.details())
    }

    def deleteDelete() {
        return delete(changeLogDefinitionService.delete())
    }


}

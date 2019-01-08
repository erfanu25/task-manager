package com.hmtmcse.tm.controllers.api

import com.hmtmcse.gs.GsRestProcessor
import com.hmtmcse.tm.TodoDefinitionService

class ApiTodoV1Controller extends GsRestProcessor {

    TodoDefinitionService todoDefinitionService

    def postQuickCreate() {
        return create(todoDefinitionService.create())
    }

    def postUpdate() {
        return create(todoDefinitionService.create())
    }

    def postList() {
        return list(todoDefinitionService.list())
    }

    def postDetails() {
        return details(todoDefinitionService.details())
    }

    def getDetails() {
        return details(todoDefinitionService.details())
    }

}

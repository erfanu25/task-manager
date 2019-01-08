package com.hmtmcse.tm.controllers.api

import com.hmtmcse.gs.GsRestProcessor
import com.hmtmcse.tm.TodoDefinitionService

class ApiBugV1Controller extends GsRestProcessor {

    TodoDefinitionService todoDefinitionService

    def postCreate() {
        return create(todoDefinitionService.create())
    }

    def postUpdate() {
        return create(todoDefinitionService.create())
    }

    def postList() {
        return create(todoDefinitionService.create())
    }

    def postDetails() {
        return create(todoDefinitionService.create())
    }

}

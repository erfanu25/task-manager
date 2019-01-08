package com.hmtmcse.tm.controllers.api

import com.hmtmcse.gs.GsRestProcessor
import com.hmtmcse.tm.definition.NotesDefinitionService

class ApiNoteV1Controller extends GsRestProcessor {

    NotesDefinitionService notesDefinitionService

    def postQuickCreate() {
        return create(notesDefinitionService.create())
    }

    def postUpdate() {
        return update(notesDefinitionService.update())
    }

    def getList() {
        return list(notesDefinitionService.list())
    }

    def getDetails() {
        return details(notesDefinitionService.details())
    }

    def deleteDelete() {
        return delete(notesDefinitionService.delete())
    }

}

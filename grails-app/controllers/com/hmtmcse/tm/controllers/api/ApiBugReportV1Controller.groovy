package com.hmtmcse.tm.controllers.api

import com.hmtmcse.gs.GsRestProcessor
import com.hmtmcse.tm.definition.BugReportDefinitionService

class ApiBugReportV1Controller extends GsRestProcessor {

    BugReportDefinitionService bugReportDefinitionService

    def postQuickCreate() {
        return create(bugReportDefinitionService.create())
    }

    def postUpdate() {
        return update(bugReportDefinitionService.update())
    }

    def getList() {
        return list(bugReportDefinitionService.list())
    }

    def getDetails() {
        return details(bugReportDefinitionService.details())
    }

    def deleteDelete() {
        return delete(bugReportDefinitionService.delete())
    }

}

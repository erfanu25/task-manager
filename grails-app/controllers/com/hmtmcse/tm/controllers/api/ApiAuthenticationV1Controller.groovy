package com.hmtmcse.tm.controllers.api

import com.hmtmcse.tm.AuthenticationDefinitionService
import com.hmtmcse.gs.GsRestProcessor

class ApiAuthenticationV1Controller extends GsRestProcessor {

    AuthenticationDefinitionService authenticationDefinitionService

    def postLogin() {
        return customProcessor(authenticationDefinitionService.login())
    }

    def getLogout() {
        return customProcessor(authenticationDefinitionService.logout())
    }

    def getIsSessionExist() {
        return customProcessor(authenticationDefinitionService.isSessionExist())
    }
}

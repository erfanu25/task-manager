package com.hmtmcse.tm

class BootStrap {

    AppInitService appInitService

    def init = { servletContext ->
        appInitService.initUser()
    }
    def destroy = {
    }
}

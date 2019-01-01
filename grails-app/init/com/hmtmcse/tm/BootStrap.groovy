package com.hmtmcse.tm

import com.hmtmcse.websocket.ChatEndpoint

import javax.websocket.server.ServerContainer

class BootStrap {

    AppInitService appInitService

    def init = { servletContext ->

        appInitService.initUser()
        ServerContainer serverContainer = servletContext.getAttribute("javax.websocket.server.ServerContainer")
        serverContainer.addEndpoint(ChatEndpoint)

    }
    def destroy = {
    }
}

package com.hmtmcse.tm

import com.hmtmcse.gs.GsConfigHolder
import com.hmtmcse.websocket.ChatEndpoint

import javax.websocket.server.ServerContainer

class BootStrap {

    AppInitService appInitService

    def init = { servletContext ->

        appInitService.initUser()


        // WebSocket
        ServerContainer serverContainer = servletContext.getAttribute("javax.websocket.server.ServerContainer")
        serverContainer.addEndpoint(ChatEndpoint)


        // Swagger Config
        GsConfigHolder.hostnameWithPort = "localhost:1122"
        GsConfigHolder.swaggerDefinitionUrl = "http://localhost:1122/swaggerUi/definition"

    }
    def destroy = {
    }
}

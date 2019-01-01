package com.hmtmcse.tm.controllers.app

import com.hmtmcse.websocket.ChatClient


class WebSocketExampleController {

    def index() { }

    def sent() {


        ChatClient chatClient = new ChatClient()
        String message = params.message
        chatClient.sendMessage(message)
        render("xyz sdfsdf sdfsf")
    }
}

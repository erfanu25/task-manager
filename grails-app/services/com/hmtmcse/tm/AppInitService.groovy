package com.hmtmcse.tm


class AppInitService {

    def initUser() {
        if (User.count() == 0) {
            User user = new User()
            user.firstName = "Touhid"
            user.lastName = "Mia"
            user.email = "admin@taskmanager.local"
            user.password = "123456"
            user.save(flash: true)
            return user
        }
    }

    def swaggerConfig(){

    }
}

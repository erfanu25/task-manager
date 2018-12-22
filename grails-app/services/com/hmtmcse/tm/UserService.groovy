package com.hmtmcse.tm


class UserService {

    def isEmailExist(String email) {
        User user = User.findByEmail(email)
        if (user){
            return true
        }
        return false
    }
}

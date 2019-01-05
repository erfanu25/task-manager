package com.hmtmcse.tm

class CommonTask {

    def beforeValidate () {
        if (this.uuid == null){
            this.uuid = AppUtil.uuid()
        }
    }
}

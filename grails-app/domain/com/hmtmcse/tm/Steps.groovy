package com.hmtmcse.tm

class Steps {

    String name
    String description
    String reference
    String uuid
    Boolean isLock = false
    Date startedMoment
    Double estimatedHour
    String status = TMConstant.STATUS.PENDING
    String jsonData
    String otherInfo
    Complexity complexity
    Todo todo

    Date dateCreated
    Date lastUpdated


    static constraints = {
        jsonData(nullable: true)
        description(nullable: true)
        startedMoment(nullable: true)
        otherInfo(nullable: true)
        estimatedHour(nullable: true)
        reference(nullable: true)
        complexity(nullable: true)
        todo(nullable: true)
    }

    static mapping = {
        description(type: "text")
        jsonData(type: "text")
        reference(type: "text")
        otherInfo(type: "text")
    }
}

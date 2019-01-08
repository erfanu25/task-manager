package com.hmtmcse.tm

class Complexity extends CommonTask {

    Long id
    String name
    String description
    String reference
    String uuid
    Boolean isLock = false
    Boolean isDeleted = false
    Date startedMoment
    Double estimatedHour
    String status = TMConstant.STATUS.PENDING
    String jsonData
    String otherInfo
    String type
    String taskType = TMConstant.COMPLEXITY_TASK_TYPE.DEVELOPMENT
    Todo todo

    Date dateCreated
    Date lastUpdated


    static hasMany = [steps: Steps]

    static constraints = {
        jsonData(nullable: true)
        description(nullable: true)
        startedMoment(nullable: true)
        otherInfo(nullable: true)
        estimatedHour(nullable: true)
        reference(nullable: true)
        type(nullable: true)
    }

    static mapping = {
        description(type: "text")
        jsonData(type: "text")
        reference(type: "text")
        otherInfo(type: "text")
    }
}

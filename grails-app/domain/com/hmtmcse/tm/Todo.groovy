package com.hmtmcse.tm

class Todo {

    Long id

    String name
    String description
    String uuid
    String priority
    String externalId
    Boolean isLock = false
    Boolean isDeleted = false

    User createdBy
    Date startedMoment
    Double estimatedHour
    String status = TMConstant.STATUS.DRAFT
    String jsonData
    String externalInfo

    Date dateCreated
    Date lastUpdated

    static hasMany = [complexity: Complexity, assignee: User]

    static constraints = {
        jsonData(nullable: true)
        description(nullable: true)
        startedMoment(nullable: true)
        priority(nullable: true)
        externalId(nullable: true)
        estimatedHour(nullable: true)
        externalInfo(nullable: true)
    }

    static mapping = {
        description(type: "text")
        jsonData(type: "text")
        externalInfo(type: "text")
    }
}

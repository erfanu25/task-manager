package com.hmtmcse.tm

class Todo {

    Long id

    String name
    User createdBy
    Date dueDate
    String priority = TMConstant.PRIORITY.NA
    String externalId = TMConstant.PRIORITY.NA
    String todoType = TMConstant.COMPLEXITY_TASK_TYPE.OTHERS
    Todo parentIssue



    String description
    Date startedMoment
    Double estimatedHour
    String jsonData


    String uuid

    Boolean isLock = false
    Boolean isDeleted = false
    String status = TMConstant.STATUS.DRAFT
    String externalInfo

    Date dateCreated
    Date lastUpdated

    static hasMany = [complexity: Complexity, assignee: User, relatedIssues: Todo, bug: BugReport, changeLog: ChangeLog]

    static constraints = {
        description(nullable: true)
        startedMoment(nullable: true)
        estimatedHour(nullable: true)
        jsonData(nullable: true)


        priority(nullable: true)
        externalId(nullable: true)

        externalInfo(nullable: true)
        dueDate(nullable: true)
        parentIssue(nullable: true)
    }

    static mapping = {
        description(type: "text")
        jsonData(type: "text")
        externalInfo(type: "text")
    }
}

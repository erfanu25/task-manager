package com.hmtmcse.tm

class DataChangeHistory {

    Long id
    String domainName
    String uuid
    String rowUUID
    Long rowID
    String changedDataJson


    Date dateCreated
    Date lastUpdated


    static constraints = {
        rowID(nullable: true)
        rowUUID(nullable: true)
    }

    static mapping = {
        changedDataJson(type: "text")
    }
}

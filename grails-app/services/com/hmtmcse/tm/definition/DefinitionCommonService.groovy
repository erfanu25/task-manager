package com.hmtmcse.tm.definition


class DefinitionCommonService {

    public static List commonSkipFields() {
        return ["isDeleted", "dateCreated", "lastUpdated"]
    }
}

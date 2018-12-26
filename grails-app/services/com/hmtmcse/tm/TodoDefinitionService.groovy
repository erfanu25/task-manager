package com.hmtmcse.tm

import com.hmtmcse.gs.GsApiActionDefinition


class TodoDefinitionService {

    GsApiActionDefinition create(){
        GsApiActionDefinition gsApiActionDefinition = new GsApiActionDefinition<Todo>(Todo)
        gsApiActionDefinition.includeAllThenExcludeFromResponse(["password", "version"])
        gsApiActionDefinition.includeAllThenExcludeFromWhereFilter(["password", "version"])
        return gsApiActionDefinition
    }
}

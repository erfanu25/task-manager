package com.hmtmcse.tm


class TodoService {

    def getTodoById(Long id) {
        return Todo.createCriteria().get {
            eq("id", id)
            eq("isDeleted", false)
        }
    }
}

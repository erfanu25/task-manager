package com.hmtmcse.tm


class ComplexityService {

    TodoService todoService

    def getAllComplexityByTodo(Long todoId) {
        Todo todo = todoService.getTodoById(todoId)
        if (todo){
            return Complexity.createCriteria().list {
                order("id", "desc")
                eq("todo", todo)
                eq("isDeleted", false)
            }
        }
        return []
    }
}

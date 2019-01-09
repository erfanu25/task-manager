package com.hmtmcse.tm

import grails.gorm.transactions.Transactional

@Transactional
class ChangeLogService {

    TodoService todoService

    def getAllChangeLogByTodo(Long todoId) {
        Todo todo = todoService.getTodoById(todoId)
        if (todo){
            return ChangeLog.createCriteria().list {
                order("id", "desc")
                eq("todo", todo)
                eq("isDeleted", false)
            }
        }
        return []
    }
}

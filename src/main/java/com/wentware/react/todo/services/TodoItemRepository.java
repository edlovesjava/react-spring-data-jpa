package com.wentware.react.todo.services;

import com.wentware.react.todo.model.TodoItem;
import org.springframework.data.repository.CrudRepository;

public interface TodoItemRepository extends CrudRepository<TodoItem, Long> {

}


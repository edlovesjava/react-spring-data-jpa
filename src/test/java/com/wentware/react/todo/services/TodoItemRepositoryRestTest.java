package com.wentware.react.todo.services;

import com.wentware.react.todo.model.TodoItem;
import com.wentware.react.todo.services.TodoItemRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.is;
import static org.hamcrest.collection.IsCollectionWithSize.hasSize;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class TodoItemRepositoryRestTest {

    @Autowired
    MockMvc mvc;

    @MockBean
    private TodoItemRepository todoItemRepository;

    @Test
    public void givenTodoItems_whenFindAll_thenReturnJsonArrayOfAllItems() throws Exception {

//        TodoItem testItem = new TodoItem(1l,"Get it done", false);
//
//        List<TodoItem> allItems = Arrays.asList(testItem);
//
//        given(todoItemRepository.findAll()).willReturn(allItems);
//
//
//        mvc.perform(get("/api/todoItems")
//                .contentType(MediaType.APPLICATION_JSON))
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$", hasSize(1)))
//                .andExpect(jsonPath("$[0].text", is(testItem.getText())));
    }
}


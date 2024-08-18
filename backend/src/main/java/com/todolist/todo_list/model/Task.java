package com.todolist.todo_list.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;


@Document(collection = "tasks")
@Data
public class Task {
    @Id
    private String id;
    private String noteInformation;
    private boolean status;
}

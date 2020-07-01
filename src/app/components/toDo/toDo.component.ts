import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
    selector: 'todo-item',
    templateUrl: './toDo.component.html',
    styleUrls: ['./toDo.component.css']
})

export class ToDoComponent {
    todoItems: Todo[];

    constructor(){
        this.todoItems = [
            {task: "Clean up the carpet stains", completed: false},
            {task: "Clean the dishes", completed: true},
            {task: "Do laundry", completed: true},
            {task: "Put the cat out", completed: true},
            {task: "Wash the car", completed: true},
            {task: "Get a haircut", completed: false},
            {task: "Finish homework", completed: true},
            {task: "Walk the dog", completed: true},
        ]
    }

    removeTask(item: Todo, index: number): void {
        console.log(index);
        console.log(item);
        this.todoItems.splice(index, 1);
    }

    addToDo(){
        
    }
}
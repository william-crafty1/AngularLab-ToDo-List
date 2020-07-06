import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
    selector: 'todo-item',
    templateUrl: './toDo.component.html',
    styleUrls: ['./toDo.component.css']
})

export class ToDoComponent implements OnInit {
    todoItems: Todo[];
    value: string;
    filterValue: string;
    filteredTodos: Todo[];

    constructor(){
    }

    ngOnInit() {
        this.todoItems = [
            {task: "Clean up the carpet stains", completed: false},
            {task: "Clean the dishes", completed: false},
            {task: "Do laundry", completed: true},
            {task: "Put the cat out", completed: true},
            {task: "Wash the car", completed: true},
            {task: "Get a haircut", completed: false},
            {task: "Finish homework", completed: true},
            {task: "Walk the dog", completed: true},
        ]

        this.filteredTodos = this.todoItems;
    }

    removeTask(item: Todo, index: number): void {
        console.log(index);
        console.log(item);
        this.todoItems.splice(index, 1);
        this.filteredTodos = this.todoItems;
    }

    addToDo(){
        const newToDo : Todo = {task: this.value, completed: false}
        this.todoItems.push(newToDo);
    }

    filterToDo(){
        if(!this.filterValue){
            return this.todoItems;
        }
        return this.todoItems.filter(item => item.task.includes(this.filterValue));
    }
}
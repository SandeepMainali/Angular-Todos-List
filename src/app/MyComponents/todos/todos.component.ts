import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Todo } from '../../Todo';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.todos = [];
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadTodosFromLocalStorage();
    }
  }

  loadTodosFromLocalStorage(): void {
    const localItem = localStorage.getItem("todos");
    if (localItem !== null) {
      this.todos = JSON.parse(localItem);
    }
  }

  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      if (isPlatformBrowser(this.platformId)) {
        this.saveTodosToLocalStorage();
      }
    }
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
    if (isPlatformBrowser(this.platformId)) {
      this.saveTodosToLocalStorage();
    }
  }

  saveTodosToLocalStorage(): void {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  
toggletodo(todo: Todo): void {

    const index=this.todos.indexOf(todo);
    this.todos[index].active= ! this.todos[index].active;
    
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}

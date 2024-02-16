import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import { Todo } from '../../Todo';




@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css'] // Corrected property name
})
export class TodosItemComponent implements OnInit {
  @Input() i: number;
onCheckboxClick(todo:Todo) {
  this.todoCheckbox.emit(todo);
;
}

  @Input()
  todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  constructor(){}
  ngOnInit():void{

  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been tiggerd")
}
}






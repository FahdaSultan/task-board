import { Component, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-board';
  todo: string[] = ['First task']; 
  inprogress: string[]= [];
  done: string[]= [];

  newTask = '';
  

  // newTask(newItem: string) {
  //   localStorage.setItem("task", "newItem");
  // }
  

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  
  addTask(){
    this.todo.push(this.newTask);
    this.newTask = '';
  }


  // onAdd() {
  //   this.todo.push(localStorage.getItem('task'));
  // }


}




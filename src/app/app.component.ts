import { Component, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-board';
  todo: string[] = ['first task']; 
  inprogress: string[]= [];
  done: string[]= [];

  newTask = '';
 
  // myForm!: FormGroup;
  
// constructor(private fb: FormBuilder) {
//  this.createForm();
// }
  

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
    if (this.newTask !=='') {
      this.todo.push(this.newTask);
    }
    alert("Task is required... try again.");
    this.newTask = '';
  }

  onDeleteTask(index: number) {
    if (index !== -1) {
        this.todo.splice(index, 1);
  }
}

// get taskV() {
//    return this.myForm.get('task'); 
//   }


// createForm() {
//  this.myForm = this.fb.group({
//     username: ['', Validators.required ]
//  });
// }


}




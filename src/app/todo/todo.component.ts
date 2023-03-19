import { Component } from '@angular/core';

 interface Task {
  // newTask:string;
  id: number;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {


  newTask: string = '';
  tasks: Task[] = [
    {id:0 ,task:'Semsem',completed:false}
   ];
  

  addTask() {
    let id:number = this.tasks.length ? this.tasks[this.tasks.length-1].id+1 : 1;
    if (this.newTask.trim() !== '') {
      this.tasks.push(
        {id: id,
          task:this.newTask,
          completed:false
        }
        );

      // this.newTask ={id:0,task:'',completed:false};
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  isCompleted(id:number){
    // this.tasks[id].completed = !this.tasks[id].completed;
    let todo:Task|undefined = this.tasks.find((t)=>t.id===id);
    if(typeof todo == 'undefined')
      return;
    todo.completed=!todo.completed;
  }
  
}




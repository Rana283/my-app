// src/app/task-list/task-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks:Task[]
  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks()
  }


  ngOnInit(): void {
    // this.tasks = this.taskService.getTasks();
  }
}

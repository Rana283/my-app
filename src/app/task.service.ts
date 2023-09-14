// src/app/task.service.ts

import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'This is Task 1',
      completed: false
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'This is Task 2',
      completed: true
    }
    // Add more tasks as needed
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  // Implement other CRUD methods here
}

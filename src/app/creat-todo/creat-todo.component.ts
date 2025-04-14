import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from '../models/todo.model';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-creat-todo',
  standalone: false,
  templateUrl: './creat-todo.component.html',
  styleUrl: './creat-todo.component.css'
})
export class CreatTodoComponent {
  todoForm: FormGroup;
  submitting = false;
  success = false;
  error: string | null = null;

  private userId = 7374931;
  private apiUrl = `https://gorest.co.in/public/v2/users/${this.userId}/todos`;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.todoForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      status: ['pending', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.todoForm.invalid) return;

    this.submitting = true;
    this.error = null;
    this.success = false;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer a6d5502d785fd37dcc64525374c2b1ffa49df771df45d9cc90212a51153ef6a4',
      'Content-Type': 'application/json'
    });

    const todoData = {
      ...this.todoForm.value,
      user_id: this.userId
    };

    this.http.post(this.apiUrl, todoData, { headers }).subscribe({
      next: () => {
        this.success = true;
        this.todoForm.reset({ status: 'pending' });
        this.submitting = false;

        setTimeout(() => this.router.navigate(['/todos']), 2000);
      },
      error: (err) => {
        this.error = err.error?.message || 'Failed to create TODO.';
        this.submitting = false;
        console.error(err);
      }
    });
  }
}

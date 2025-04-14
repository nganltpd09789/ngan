import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo',
  standalone: false,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  posts: Todo[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.loading = true;
    this.http.get<Todo[]>('https://gorest.co.in//public/v2/users/7374931/todos')
      .subscribe({
        next: (data) => {
          this.posts = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed';
          this.loading = false;
          console.error('Err: ', err);
        }
      });
  }
}

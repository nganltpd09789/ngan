import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.loading = true;
    this.http.get<Post[]>('https://gorest.co.in/public/v2/posts')
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

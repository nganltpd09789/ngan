import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-create-post',
  standalone: false,
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {
  postForm: FormGroup;
  submitting = false;
  error: string | null = null;
  success = false;
  
  // Hardcoded user ID as specified in the requirements
  private userId = 7374916;
  private apiUrl = `https://gorest.co.in/public/v2/users/${this.userId}/posts`;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      body: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.postForm.invalid) {
      return;
    }

    this.submitting = true;
    this.error = null;
    this.success = false;

    const postData = {
      ...this.postForm.value,
      user_id: this.userId
    };

    // Headers with authentication token
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer a6d5502d785fd37dcc64525374c2b1ffa49df771df45d9cc90212a51153ef6a4'
    };

    this.http.post<Post>(this.apiUrl, postData, { headers })
      .subscribe({
        next: (response) => {
          this.submitting = false;
          this.success = true;
          this.postForm.reset();
          
          // Navigate to posts list after 2 seconds
          setTimeout(() => {
            this.router.navigate(['/posts']);
          }, 2000);
        },
        error: (err) => {
          this.submitting = false;
          this.error = err.error?.message || 'Failed to create post. Please try again later.';
          console.error('Error creating post:', err);
        }
      });
  }
}
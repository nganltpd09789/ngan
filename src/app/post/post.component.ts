import { Component, input } from '@angular/core';
import { Post } from '../models/Post.model';


@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  post = input.required<Post>();
}

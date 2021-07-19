import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Posts } from 'src/app/core/models/posts/posts';
import { PostService } from 'src/app/core/services/firebase/post.service';
import { CustomRoutes } from '../../utils/custom.routes';

@Component({
  selector: 'app-blog-resumen',
  templateUrl: './blog-resumen.component.html',
  styleUrls: ['./blog-resumen.component.scss'],
})
export class BlogResumenComponent implements OnInit {
  posts: Posts[];
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPost().subscribe((data) => {
      // console.log(data);
      this.posts = data.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as Posts;
      });
    });
  }
}

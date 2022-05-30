import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '@core/models/devto/response-devto';
import { DevtoService } from '@core/services/devto/devto.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  posts!: IPost[];
  constructor(private devtoService: DevtoService) {}
  ngOnInit(): void {
    this.getPostsDevto();
  }

  getPostsDevto(): void {
    this.devtoService.getPostDevTo().subscribe((data) => {
      this.posts = data
        .sort((a, b) => {
          return (
            new Date(a.published_at).getTime() -
            new Date(b.published_at).getTime()
          );
        })
        .slice(0, 3);
    });
  }
}

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
      console.log(data);
      this.posts = data;
    });
  }
}

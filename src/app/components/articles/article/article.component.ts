import { Component, Input } from '@angular/core';
import { IPost } from '@core/models/devto/response-devto';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() posts!: IPost;
  constructor() {}
}

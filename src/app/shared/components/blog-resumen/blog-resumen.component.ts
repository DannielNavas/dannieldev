import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/core/models/posts/posts';
import { DevtoService } from 'src/app/core/services/blog/devto.service';

@Component({
  selector: 'app-blog-resumen',
  templateUrl: './blog-resumen.component.html',
  styleUrls: ['./blog-resumen.component.scss'],
})
export class BlogResumenComponent implements OnInit {
  devtos: IPost;
  constructor(private devtoService: DevtoService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.devtoService.getPostDevTo().subscribe((responseDevTo: IPost) => this.devtos = responseDevTo);
  }
}

import { Component, OnInit } from '@angular/core';
import { IPost } from '@core/models/posts/posts';
import { DevtoService } from '@core/services/blog/devto.service';
import { faDev } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-blog-resumen',
  templateUrl: './blog-resumen.component.html',
  styleUrls: ['./blog-resumen.component.scss'],
})
export class BlogResumenComponent implements OnInit {
  devtos: IPost;
  dev = faDev;
  constructor(private devtoService: DevtoService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.devtoService.getPostDevTo().subscribe((responseDevTo: IPost) => this.devtos = responseDevTo);
  }
}

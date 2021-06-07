import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-resumen',
  templateUrl: './blog-resumen.component.html',
  styleUrls: ['./blog-resumen.component.scss']
})
export class BlogResumenComponent implements OnInit {
  posts: number[] = [];
  constructor() { }

  ngOnInit(): void {
    this.posts = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ];
  }

}

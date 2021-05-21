import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
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

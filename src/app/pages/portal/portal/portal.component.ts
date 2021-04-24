import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {
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

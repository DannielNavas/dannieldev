import { Component, OnInit } from '@angular/core';
import { faAngular, faGithub, faMedium } from '@fortawesome/fontawesome-free-brands';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

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

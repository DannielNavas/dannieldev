import { Component, OnInit } from '@angular/core';
import { faAngular, faGithub, faMedium } from '@fortawesome/fontawesome-free-brands';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  angular = faAngular;
  github = faGithub;
  constructor() { }

  ngOnInit(): void {
  }

}

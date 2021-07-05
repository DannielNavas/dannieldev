import { Component, OnInit } from '@angular/core';
import { faAngular, faGithub, faInstagram, faLinkedin, faLinkedinIn, faMedium, faYoutube, faYoutubeSquare } from '@fortawesome/fontawesome-free-brands';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  linkedin = faLinkedin;
  instagram = faInstagram;
  youtube = faYoutube;
  constructor() { }

  ngOnInit(): void {
  }

}

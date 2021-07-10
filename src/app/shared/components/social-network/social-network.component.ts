import { Component, OnInit } from '@angular/core';
import { faAngular, faGithub, faInstagram, faLinkedin, faLinkedinIn, faMedium, faYoutube, faYoutubeSquare } from '@fortawesome/fontawesome-free-brands';

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.scss']
})
export class SocialNetworkComponent implements OnInit {
  linkedin = faLinkedin;
  instagram = faInstagram;
  youtube = faYoutube;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { faInstagram, faLinkedin, faYoutube } from '@fortawesome/fontawesome-free-brands';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  linkedin = faLinkedin;
  instagram = faInstagram;
  youtube = faYoutube;
  constructor() { }

  ngOnInit(): void {
  }

}

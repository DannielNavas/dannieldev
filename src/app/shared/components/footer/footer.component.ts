import { Component } from '@angular/core';
import { faInstagram, faLinkedin, faYoutube } from '@fortawesome/fontawesome-free-brands';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  linkedin = faLinkedin;
  instagram = faInstagram;
  youtube = faYoutube;
}

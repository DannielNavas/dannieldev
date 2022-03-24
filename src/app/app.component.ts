import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Gtag } from 'angular-gtag';
import { filter } from 'rxjs/operators';
declare var gtag;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'danniel.dev';
  constructor(private router: Router, private gtag2: Gtag) {
    const navEndEvents$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );
    navEndEvents$.subscribe((event: NavigationEnd) => {
      gtag('config', 'G-HDQFTS9M45', {
        page_path: event.urlAfterRedirects,
      });
      this.gtag2.pageview({
        page_title: 'Lesson Feed',
        page_path: event.urlAfterRedirects,
        page_location: `https:/danniel.dev/${event.urlAfterRedirects}`,
      });
    });
  }
}

import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
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
  constructor(
    private router: Router,
    private gtmService: GoogleTagManagerService
  ) {
    this.gtmService.addGtmToDom();
    const navEndEvents$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );
    navEndEvents$.subscribe((event: NavigationEnd) => {
      const gtmTag = {
        event: 'page-view',
        page: event.urlAfterRedirects,
      };
      this.gtmService.pushTag(gtmTag);
    });
  }
}

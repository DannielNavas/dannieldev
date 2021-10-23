import { Component, OnInit } from '@angular/core';
import { Aboutme } from '@core/models/aboutme/aboutme';
import { Playlist, Principal, ResponseAboutMe, Stack } from '@core/models/aboutme/response-about-me';
import { AboutmeService } from '@core/services/firebase/aboutme.service';
import { PostService } from '@core/services/firebase/post.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  about: any;
  initData: Aboutme = new Aboutme();
  aboutme: ResponseAboutMe[];
  principal: Principal;
  presentaciones: Playlist;
  playlist: Playlist;
  secodary: Playlist;
  stack: Stack;

  constructor(private aboutmeService: AboutmeService) {}

  ngOnInit(): void {
    this.getDataAbout();
  }
  getDataAbout(): void {
    this.aboutmeService.getAboutMeData().pipe(
      map((about) =>
        about.map((data) => ({
          datos: data.payload.doc.data(),
        }))
      )
    ).subscribe((responseData: ResponseAboutMe[]) => {
      this.aboutme = responseData;
      let { principal, presentaciones, playlist, secodary, stack  } = responseData[0].datos.body;
      this.principal = principal;
      this.presentaciones = presentaciones;
      this.playlist = playlist;
      this.secodary = secodary;
      this.stack = stack;
    });
  }
}

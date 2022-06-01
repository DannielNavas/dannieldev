import { Component, OnInit } from '@angular/core';
import { IPost } from '@core/models/devto/response-devto';
import { IResponseStatistics } from '@core/models/statistic/response-statistec';
import { RequestYoutube } from '@core/models/youtube/request-youtube';
import { ResponseYoutube } from '@core/models/youtube/response-youtube';
import { DevtoService } from '@core/services/devto/devto.service';
import { YoutubeService } from '@core/services/youtube/youtube.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {
  datos = [1, 2, 3];
  dataYoutube!: ResponseYoutube;
  posts!: IPost[];
  constructor(
    private youtubeService: YoutubeService,
    private devtoService: DevtoService
  ) {}
  ngOnInit(): void {
    this.getDataYoutube();
    this.getPostsDevto();
  }

  getDataYoutube(): void {
    this.youtubeService
      .getLastesYoutubeVideos()
      .subscribe((data: ResponseYoutube) => {
        this.dataYoutube = data;
      });
  }
  getPostsDevto(): void {
    this.devtoService.getPostDevTo().subscribe((data: IPost[]) => {
      this.posts = data.slice(0, 3);
    });
  }
}

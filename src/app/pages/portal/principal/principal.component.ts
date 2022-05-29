import { Component, OnInit } from '@angular/core';
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
  constructor(private youtubeService: YoutubeService) {}
  ngOnInit(): void {
    this.getDataYoutube();
  }

  getDataYoutube(): void {
    this.youtubeService.getLastesYoutubeVideos().subscribe(
      (data: ResponseYoutube) => {
        this.dataYoutube = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}

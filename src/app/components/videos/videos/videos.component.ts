import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '@core/services/youtube/youtube.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  videos: any;
  constructor(private youtubeService: YoutubeService) {}

  ngOnInit(): void {
    this.getAllVideos();
  }

  getAllVideos(): void {
    this.youtubeService.getLastesYoutubeVideos().subscribe((data) => {
      this.videos = data.items;
    });
  }
}

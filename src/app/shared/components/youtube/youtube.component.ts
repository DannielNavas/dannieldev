import { YoutubeService } from './../../../core/services/youtube/youtube.service';
import { Component, OnInit } from '@angular/core';
import { Item, Youtube } from 'src/app/core/models/youtube/youtube';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export class YoutubeComponent implements OnInit {
  myVideos: Item[];
  message: any;

  constructor(private youtubeService: YoutubeService) {}

  ngOnInit(): void {
    this.getLastesYoutubeVideos();
  }

  getLastesYoutubeVideos(): void {
    this.youtubeService.getLastesYoutubeVideos().subscribe(
      (videos: Youtube) => (this.myVideos = videos.items),
      (error) => (this.message = error)
    );
  }
}

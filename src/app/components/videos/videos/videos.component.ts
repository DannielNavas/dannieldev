import { Component, Input, OnInit } from '@angular/core';
import { Item } from '@core/models/youtube/response-youtube';
import { YoutubeService } from '@core/services/youtube/youtube.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent {
  @Input() video!: Item;
  constructor() {
    console.log(this.video);
  }
}

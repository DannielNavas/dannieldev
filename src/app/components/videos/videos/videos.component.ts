import { Component, Input, OnInit } from '@angular/core';
import { Item } from '@core/models/youtube/response-youtube';
import { YoutubeService } from '@core/services/youtube/youtube.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent {
  @Input() video: Item = {
    kind: '',
    etag: '',
    id: {
      kind: '',
      videoId: '',
      channelId: '',
    },
    snippet: {
      publishedAt: '',
      channelId: '',
      title: '',
      description: '',
      thumbnails: {
        default: {
          url: '',
          width: 0,
          height: 0,
        },
        medium: {
          url: '',
          width: 0,
          height: 0,
        },
        high: {
          url: '',
          width: 0,
          height: 0,
        },
      },
      channelTitle: '',
      liveBroadcastContent: '',
      publishTime: '',
    },
  };
  constructor() {}
}

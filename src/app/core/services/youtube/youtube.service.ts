import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestYoutube } from '@core/models/youtube/request-youtube';
import { ResponseYoutube } from '@core/models/youtube/response-youtube';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(private http: HttpClient) {}

  getLastesYoutubeVideos(): Observable<ResponseYoutube> {
    return this.http.get<ResponseYoutube>(
      `${environment.youtube_endpoint}?part=${environment.youtube_part}&channelId=${environment.youtube_channel}&maxResults=5&order=date&key=${environment.youtube_key}`
    );
  }
}

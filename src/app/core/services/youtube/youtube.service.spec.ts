import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { YoutubeService } from './youtube.service';

describe('YoutubeService', () => {
  let service: YoutubeService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(YoutubeService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should response services', () => {
    const fakeResponse = {
      kind: 'youtube#searchListResponse',
      etag: 'cIApuQ_B1JEr-wQfPfv6lSC7zLw',
      regionCode: 'CO',
      pageInfo: {
        totalResults: 1,
        resultsPerPage: 1,
      },
      items: [
        {
          kind: 'youtube#searchResult',
          etag: 'wRtmBob9TchRiPBv1QlwJgi5SLo',
          id: {
            kind: 'youtube#video',
            videoId: 'Qh7lxF6tYNQ',
          },
          snippet: {
            publishedAt: '2021-07-04T03:31:36Z',
            channelId: 'UC-WOFSnewqJ1CRjFuZYaYEQ',
            title: 'Instalación y configuración sistema operativo Linux',
            description: 'Intalación sistema operativo Linux.',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/Qh7lxF6tYNQ/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/Qh7lxF6tYNQ/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/Qh7lxF6tYNQ/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'danniel navas',
            liveBroadcastContent: 'none',
            publishTime: '2021-07-04T03:31:36Z',
          },
        },
      ],
    };

    let dataError;
    let dataResponse;

    service.getLastesYoutubeVideos().subscribe(
      (response) => {
        dataResponse = response;
      },
      (error) => {
        dataError = error;
      }
    );
    const require = httpTestingController.expectOne(
      `${environment.youtube_endpoint}?part=${environment.youtube_part}&channelId=${environment.youtube_channel}&maxResults=5&order=date&key=${environment.youtube_key}`
    );

    require.flush(fakeResponse);

    expect(require.request.method).toEqual('GET');
    expect(dataError).toBeUndefined();
  });
});

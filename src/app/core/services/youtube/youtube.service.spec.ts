import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { YoutubeService } from './youtube.service';
import { environment } from 'src/environments/environment';

describe('YoutubeService', () => {
  let service: YoutubeService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(YoutubeService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should response youtube service', () => {
    const fakeResponse = {} as any;
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
    const req = httpTestingController.expectOne(
      `${environment.youtube_endpoint}?part=${environment.youtube_part}&channelId=${environment.youtube_channel}&maxResults=5&order=date&key=${environment.youtube_key}`
    );
    req.flush(fakeResponse);
    expect(req.request.method).toEqual('GET');
    expect(dataError).toBeUndefined();
  });
});

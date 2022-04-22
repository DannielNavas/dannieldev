import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { YoutubeService } from './youtube.service';

describe('YoutubeService', () => {
  let service: YoutubeService;
  let httpTesttingController: HttpTestingController;

  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
    });
      service = TestBed.inject(YoutubeService);
      httpTesttingController = TestBed.inject(HttpTestingController);
      });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YoutubeService } from '@core/services/youtube/youtube.service';
import { of } from 'rxjs';

import { VideosComponent } from './videos.component';

describe('VideosComponent', () => {
  let component: VideosComponent;
  let fixture: ComponentFixture<VideosComponent>;
  const YoutubeServiceMock: YoutubeService = {
    getLastesYoutubeVideos: jasmine
      .createSpy()
      .and.returnValue(
        of([
          { propiedad: 1 },
          { propiedad: 2 },
          { propiedad: 3 },
          { propiedad: 4 },
        ])
      ),
  } as any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideosComponent],
      providers: [{ provide: YoutubeService, useValue: YoutubeServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { YoutubeService } from './../../../core/services/youtube/youtube.service';
import { of, throwError } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeComponent } from './youtube.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

class MockYoutubeService {
  getLastesYoutubeVideos(): any {
    return of({
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
    });
  }
}

describe('YoutubeComponent', () => {
  let component: YoutubeComponent;
  let fixture: ComponentFixture<YoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, // Tells Angular we will have custom tags in our templates
      ],
      providers: [{ provide: YoutubeService, useClass: MockYoutubeService }],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should error services', () => {
    const xServices = fixture.debugElement.injector.get(YoutubeService);
    const mockCall = spyOn(xServices, 'getLastesYoutubeVideos').and.returnValue(
      throwError({
        error: 'Status error',
      })
    );
    mockCall.and.returnValue(
      throwError({
        error: 'Status error',
      })
    );
    component.getLastesYoutubeVideos();
    expect(component.message).toEqual({
      error: 'Status error',
    });
  });
});

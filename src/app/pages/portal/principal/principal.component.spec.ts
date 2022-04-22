import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YoutubeService } from '@core/services/youtube/youtube.service';
import { Observable, of } from 'rxjs';

import { PrincipalComponent } from './principal.component';

class YoutubeServiceMock {
  getLastesYoutubeVideos(): Observable<any> {
    return of({ items: [{ id: { videoId: '1' } }] });
  }
}

describe('PrincipalComponent', () => {
  let component: PrincipalComponent;
  let fixture: ComponentFixture<PrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrincipalComponent],
      providers: [{ provide: YoutubeService, useClass: YoutubeServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

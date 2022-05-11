import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DevtoService } from '@core/services/devto/devto.service';
import { of } from 'rxjs';

import { StatsComponent } from './stats.component';

class MockDevtoService {
  getStats() {
    return of({
      views: 694,
      reactions: 33,
      post: 11,
      public_repos: 15,
      followers: 3,
      following: 10,
      public_gists: 1,
    });
  }
}

describe('StatsComponent', () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsComponent],
      providers: [{ provide: DevtoService, useClass: MockDevtoService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

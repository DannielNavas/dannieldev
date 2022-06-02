import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GithubService } from '@core/services/github/github.service';
import { SharedModule } from '@shared/shared.module';
import { of } from 'rxjs';

import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsComponent],
      imports: [SharedModule],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Share', () => {
    navigator.share = jasmine.createSpy('navigator.share');
    component.share('Hola');
    expect(navigator.share).toHaveBeenCalled();
  });

  it('should Share error', () => {
    navigator.share = jasmine.createSpy().and.returnValues(Promise.reject());
    component.share('Hola');
    expect(component).toBeTruthy();
  });
});

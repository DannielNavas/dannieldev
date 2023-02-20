import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectComponent } from './projects.component';

import { SharedModule } from '@shared/shared.module';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectComponent],
      imports: [SharedModule],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    component.project = {} as any;
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

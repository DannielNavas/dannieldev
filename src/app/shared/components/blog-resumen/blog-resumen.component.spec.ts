import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogResumenComponent } from './blog-resumen.component';

describe('BlogResumenComponent', () => {
  let component: BlogResumenComponent;
  let fixture: ComponentFixture<BlogResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogResumenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

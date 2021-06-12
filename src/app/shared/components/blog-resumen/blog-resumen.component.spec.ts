import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogResumenComponent } from './blog-resumen.component';

describe('BlogResumenComponent', () => {
  let component: BlogResumenComponent;
  let fixture: ComponentFixture<BlogResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogResumenComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA // Tells Angular we will have custom tags in our templates
      ]
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

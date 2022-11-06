import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsarticleComponent } from './detailsarticle.component';

describe('DetailsarticleComponent', () => {
  let component: DetailsarticleComponent;
  let fixture: ComponentFixture<DetailsarticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsarticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

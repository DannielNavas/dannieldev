import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutmeprincipalComponent } from './aboutmeprincipal.component';

describe('AboutmeprincipalComponent', () => {
  let component: AboutmeprincipalComponent;
  let fixture: ComponentFixture<AboutmeprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutmeprincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmeprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

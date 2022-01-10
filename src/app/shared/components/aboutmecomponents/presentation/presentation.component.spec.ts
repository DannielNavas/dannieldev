import { SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationComponent } from './presentation.component';

describe('PresentationComponent', () => {
  let component: PresentationComponent;
  let fixture: ComponentFixture<PresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should ngOnchange playlist', () => {
    const fakeSimpleChanges = {} as SimpleChanges;
    component.ngOnChanges(fakeSimpleChanges);
  });
  it('should ngOnchange principalData playlist', () => {
    const fakeSimpleChanges = {} as SimpleChanges;
    component.data = {
      items: ["Anime to work", "Tu mundo en español","Developer" ],
      title: "Playlist stpotify"
    };

    component.ngOnChanges(fakeSimpleChanges);
  });
});

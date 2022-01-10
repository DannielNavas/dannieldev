import { SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistComponent } from './playlist.component';

describe('PlaylistComponent', () => {
  let component: PlaylistComponent;
  let fixture: ComponentFixture<PlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistComponent);
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
    component.playlist = {
      items: ["Anime to work", "Tu mundo en español","Developer" ],
      title: "Playlist stpotify"
    };

    component.ngOnChanges(fakeSimpleChanges);
  });
});

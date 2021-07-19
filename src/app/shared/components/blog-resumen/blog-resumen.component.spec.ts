import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { of } from 'rxjs';
import { PostService } from 'src/app/core/services/firebase/post.service';
import { environment } from 'src/environments/environment';

import { BlogResumenComponent } from './blog-resumen.component';

class MockPostService {
  getPost(): any {
    return of([{
      payload: {
        doc: {
          id: 'AIzaSyD',
          data(): any {
            return of({});
          },
        },
      },
    }]);
  }
}

describe('BlogResumenComponent', () => {
  let component: BlogResumenComponent;
  let fixture: ComponentFixture<BlogResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogResumenComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, // Tells Angular we will have custom tags in our templates
      ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireStorageModule,
      ],
      providers: [{ provide: PostService, useClass: MockPostService }],
    }).compileComponents();
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

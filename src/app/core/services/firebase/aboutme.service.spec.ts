/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { AboutmeService } from './aboutme.service';

xdescribe('Service: Aboutme', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutmeService]
    });
  });

  it('should ...', inject([AboutmeService], (service: AboutmeService) => {
    expect(service).toBeTruthy();
  }));
});

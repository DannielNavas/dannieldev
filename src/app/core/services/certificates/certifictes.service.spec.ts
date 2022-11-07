import { TestBed } from '@angular/core/testing';

import { CertifictesService } from './certifictes.service';

describe('CertifictesService', () => {
  let service: CertifictesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertifictesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

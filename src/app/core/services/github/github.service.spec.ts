import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { GithubService } from './github.service';

describe('GithubService', () => {
  let service: GithubService;
  let httpCLient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GithubService);
    httpCLient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should response github service', () => {
    const fakeResponse = {} as any;
    let dataError;
    let dataResponse;

    service.getAllProjects().subscribe(
      (response) => {
        dataResponse = response;
      },
      (error) => {
        dataError = error;
      }
    );
    const req = httpTestingController.expectOne(
      `${environment.github_url}/DannielNavas/repos`
    );
    req.flush(fakeResponse);
    expect(req.request.method).toEqual('GET');
    expect(dataError).toBeUndefined();
  });
});

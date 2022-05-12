import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponseGithub } from '@core/models/github/response-github';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<IResponseGithub[]> {
    return this.http.get<IResponseGithub[]>(
      `${environment.github_url}/DannielNavas/repos`
    );
  }
  getLenguajeProject(project: string): Observable<any> {
    return this.http.get<IResponseGithub[]>(
      `https://api.github.com/repos/DannielNavas/${project}/languages`
    );
  }
}

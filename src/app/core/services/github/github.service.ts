import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GithubProfile } from '@core/models/github/github.profile';
import { GithubRepos } from '@core/models/github/github.repos';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getPerfil(): Observable<GithubProfile> {
    return this.http.get<GithubProfile>(`${ environment.github_url }/DannielNavas`);
  }

  getRepos(): Observable<GithubRepos[]> {
    return this.http.get<GithubRepos[]>(`${ environment.github_url }/DannielNavas/repos`);
  }
}

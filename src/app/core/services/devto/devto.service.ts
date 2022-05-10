import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '@core/models/devto/response-devto';
import { IResponseStatistics } from '@core/models/statistic/response-statistec';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DevtoService {
  constructor(private http: HttpClient) {}

  getPostDevTo(): Observable<IPost[]> {
    return this.http.get<IPost[]>(environment.devto);
  }

  getStats(): Observable<IResponseStatistics> {
    return this.http.get<IResponseStatistics>(environment.statistics);
  }
}

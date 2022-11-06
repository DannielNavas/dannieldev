import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IArticle } from '@core/models/devto/article.interface';
import { IPost } from '@core/models/devto/response-devto';
import { IResponseStatistics } from '@core/models/statistic/response-statistec';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class DevtoService {
    constructor(private http: HttpClient) { }

    getPostDevTo(): Observable<IPost[]> {
        return this.http.get<IPost[]>(environment.devto);
    }

    getStats(): Observable<IResponseStatistics> {
        return this.http.get<IResponseStatistics>(environment.statistics);
    }
    getpost(id: string): Observable<IArticle> {
        return this.http.get<IArticle>(`https://dev.to/api/articles/${id}`);
    }

    getDataUser(id: number): Observable<any> {
        return this.http.get<any>(`https://dev.to/api/users/${id}`);
    }
}

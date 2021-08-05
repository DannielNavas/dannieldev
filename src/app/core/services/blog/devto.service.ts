import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../../models/posts/posts';

@Injectable({
  providedIn: 'root'
})
export class DevtoService {

  constructor (private http: HttpClient) { }

  getPostDevTo(): Observable<IPost> {
    return this.http.get<IPost>(environment.devto);
  }
}

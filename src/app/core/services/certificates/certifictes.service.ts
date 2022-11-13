import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICertificates } from '@core/models/certificates/certificates.interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CertifictesService {

    constructor(private http: HttpClient) { }

    getCertificates(): Observable<ICertificates[]> {
        return this.http.get<ICertificates[]>('./../../../../assets/certificates.json')
    }
}

import { Component, Input, OnInit } from '@angular/core';
import { ICertificates } from '@core/models/certificates/certificates.interface';

@Component({
    selector: 'app-certificate',
    templateUrl: './certificate.component.html',
    styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent {
    @Input() certificate!: ICertificates;
    constructor() { }

}

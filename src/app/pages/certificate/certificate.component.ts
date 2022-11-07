import { Component, OnInit } from '@angular/core';
import { ICertificates } from '@core/models/certificates/certificates.interface';
import { CertifictesService } from '@core/services/certificates/certifictes.service';

@Component({
    selector: 'app-certificate',
    templateUrl: './certificate.component.html',
    styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {
    certificates!: ICertificates[];
    constructor(private certifictesService: CertifictesService) { }
    ngOnInit(): void {
        this.getDataCertificates();
    }

    getDataCertificates(): void {
        this.certifictesService.getCertificates().subscribe((response: ICertificates[]) => this.certificates = response)
    }
}

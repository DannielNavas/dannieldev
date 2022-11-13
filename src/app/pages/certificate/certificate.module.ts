import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificateRoutingModule } from './certificate-routing.module';
import { CertificateComponent } from './certificate.component';
import { NavigationModule } from '@components/navigation/navigation.module';
import { CertificatesModule } from '@components/certificate/certificate.module';


@NgModule({
    declarations: [
        CertificateComponent
    ],
    imports: [
        CommonModule,
        CertificateRoutingModule,
        NavigationModule,
        CertificatesModule
    ]
})
export class CertificateModule { }

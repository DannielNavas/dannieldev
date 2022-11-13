import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateComponent } from './certificate.component';



@NgModule({
    declarations: [
        CertificateComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CertificateComponent
    ]
})
export class CertificatesModule { }

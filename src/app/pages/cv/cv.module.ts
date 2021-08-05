import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CurriculumComponent],
  imports: [
    CommonModule,
    CvRoutingModule,
    SharedModule
  ]
})
export class CvModule { }

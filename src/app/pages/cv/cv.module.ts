import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { CurriculumComponent } from './curriculum/curriculum.component';


@NgModule({
  declarations: [CurriculumComponent],
  imports: [
    CommonModule,
    CvRoutingModule
  ]
})
export class CvModule { }

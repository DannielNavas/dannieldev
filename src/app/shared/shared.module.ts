import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomDataPipe } from './pipes/random-data.pipe';



@NgModule({
  declarations: [
    RandomDataPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

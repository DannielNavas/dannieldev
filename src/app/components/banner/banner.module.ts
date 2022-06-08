import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [BannerComponent],
  imports: [CommonModule, SharedModule],
  exports: [BannerComponent],
})
export class BannerModule {}

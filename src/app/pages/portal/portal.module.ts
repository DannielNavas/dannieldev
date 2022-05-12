import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { BannerModule } from '@components/banner/banner.module';
import { ArticlesModule } from '@components/articles/articles.module';
import { HeaderModule } from '@components/header/header.module';
import { StatsModule } from '@components/stats/stats.module';
import { ProjectsModule } from '@components/projects/projects.module';

@NgModule({
  declarations: [PrincipalComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
    BannerModule,
    ArticlesModule,
    HeaderModule,
    StatsModule,
    ProjectsModule,
  ],
})
export class PortalModule {}

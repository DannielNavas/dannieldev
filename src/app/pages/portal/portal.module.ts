import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { BannerModule } from '@components/banner/banner.module';
import { ArticleModule } from '@components/articles/articles.module';
import { StatsModule } from '@components/stats/stats.module';
import { ProjectModule } from '@components/projects/projects.module';
import { VideosModule } from '@components/videos/videos.module';
import { SharedModule } from '@shared/shared.module';
import { NavigationModule } from '@components/navigation/navigation.module';

@NgModule({
    declarations: [PrincipalComponent],
    imports: [
        CommonModule,
        PortalRoutingModule,
        BannerModule,
        ArticleModule,
        NavigationModule,
        StatsModule,
        ProjectModule,
        VideosModule,
        SharedModule,
    ],
})
export class PortalModule { }

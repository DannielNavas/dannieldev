import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { NavigationModule } from '@components/navigation/navigation.module';
import { SharedModule } from '@shared/shared.module';
import { ProjectModule } from '@components/projects/projects.module';


@NgModule({
    declarations: [
        ProjectsComponent
    ],
    imports: [
        CommonModule,
        ProjectsRoutingModule,
        NavigationModule,
        SharedModule,
        ProjectModule
    ]
})
export class ProjectsModule { }

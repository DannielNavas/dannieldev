import { CurriculumComponent } from './curriculum/curriculum.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomRoutes } from 'src/app/shared/utils/custom.routes';

const routes: Routes = [
  {
    component: CurriculumComponent,
    path: '',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule { }

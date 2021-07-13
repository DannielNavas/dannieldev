import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CustomRoutes } from './shared/utils/custom.routes'

const routes: Routes = [
  {
    loadChildren: () => import('./pages/portal/portal.module').then((m) => m.PortalModule),
    path: ''
  },
  {
    loadChildren: () => import('./pages/blog/blog.module').then((m) => m.BlogModule),
    path: CustomRoutes.blog,
  },
  {
    loadChildren: () => import('./pages/cv/cv.module').then((m) => m.CvModule),
    path: CustomRoutes.cv,
  },
  {
    loadChildren: () => import('./pages/articles/articles.module').then((m) => m.ArticlesModule),
    path: `${ CustomRoutes.articles }/:idarticle`,
  },
  {
    loadChildren: () => import('./pages/portal/portal.module').then((m) => m.PortalModule),
    path: '**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

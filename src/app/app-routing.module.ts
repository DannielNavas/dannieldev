import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomRoutes } from '@shared/utils/custom.routes';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/portal/portal.module').then((m) => m.PortalModule),
  },
  {
    path: CustomRoutes.blog,
    loadChildren: () =>
      import('./pages/blog/blog.module').then((m) => m.BlogModule),
    title: 'DannielDev - Blog',
  },
  {
    path: CustomRoutes.projects,
    loadChildren: () =>
      import('./pages/projects/projects.module').then((m) => m.ProjectsModule),
    title: 'DannielDev - Projects',
  },
  {
    path: CustomRoutes.certificates,
    loadChildren: () =>
      import('./pages/certificate/certificate.module').then(
        (m) => m.CertificateModule
      ),
    title: 'DannielDev - Certificates',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

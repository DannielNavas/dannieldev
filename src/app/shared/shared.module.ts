import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubComponent } from './components/github/github.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogResumenComponent } from './components/blog-resumen/blog-resumen.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    GithubComponent,
    HeaderComponent,
    BlogResumenComponent,
    BannerComponent,
    ProjectsComponent,
    FooterComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule ],
  exports: [
    GithubComponent,
    HeaderComponent,
    BlogResumenComponent,
    BannerComponent,
    ProjectsComponent,
    FooterComponent,
  ],
})
export class SharedModule {}

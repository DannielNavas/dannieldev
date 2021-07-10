import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BlogResumenComponent } from './components/blog-resumen/blog-resumen.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { SocialNetworkComponent } from './components/social-network/social-network.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BlogResumenComponent,
    BannerComponent,
    ProjectsComponent,
    FooterComponent,
    SocialNetworkComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule ],
  exports: [
    HeaderComponent,
    BlogResumenComponent,
    BannerComponent,
    ProjectsComponent,
    FooterComponent,
  ],
})
export class SharedModule {}

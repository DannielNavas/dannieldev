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
import { YoutubeComponent } from './components/youtube/youtube.component';
import { AboutmeprincipalComponent } from './components/aboutmecomponents/aboutmeprincipal/aboutmeprincipal.component';
import { StackComponent } from './components/aboutmecomponents/stack/stack.component';
import { PlaylistComponent } from './components/aboutmecomponents/playlist/playlist.component';
import { PresentationComponent } from './components/aboutmecomponents/presentation/presentation.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BlogResumenComponent,
    BannerComponent,
    ProjectsComponent,
    FooterComponent,
    SocialNetworkComponent,
    YoutubeComponent,
    AboutmeprincipalComponent,
    StackComponent,
    PlaylistComponent,
    PresentationComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule ],
  exports: [
    HeaderComponent,
    BlogResumenComponent,
    BannerComponent,
    ProjectsComponent,
    FooterComponent,
    YoutubeComponent,
    AboutmeprincipalComponent,
    StackComponent,
    PlaylistComponent,
    PresentationComponent,
  ],
})
export class SharedModule {}

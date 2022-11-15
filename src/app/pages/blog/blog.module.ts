import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { ArticleComponent } from './article/article.component';
import { ArticleModule } from '@components/articles/articles.module';
import { NavigationModule } from '@components/navigation/navigation.module';
import { AboutmeModule } from '@components/aboutme/aboutme.module';
import { DetailsarticleModule } from '@components/detailsarticle/detailsarticle.module';

@NgModule({
    declarations: [
        BlogComponent,
        ArticleComponent
    ],
    imports: [
        CommonModule,
        BlogRoutingModule,
        ArticleModule,
        NavigationModule,
        AboutmeModule,
        DetailsarticleModule,
    ]
})
export class BlogModule { }

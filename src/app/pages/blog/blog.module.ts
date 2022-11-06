import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { ArticleComponent } from './article/article.component';
import { ArticleModule } from '@components/articles/articles.module';
import { NavigationModule } from '@components/navigation/navigation.module';


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
    ]
})
export class BlogModule { }

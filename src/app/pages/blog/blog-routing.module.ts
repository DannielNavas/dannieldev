import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomRoutes } from '@shared/utils/custom.routes';
import { ArticleComponent } from './article/article.component';
import { BlogComponent } from './blog.component';

const routes: Routes = [
    {
        path: '',
        component: BlogComponent
    },
    {
        path: `${CustomRoutes.articles}/:id`,
        component: ArticleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule { }

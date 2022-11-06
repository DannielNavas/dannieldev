import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ArticleComponent],
    imports: [CommonModule, SharedModule, RouterModule],
    exports: [ArticleComponent],
})
export class ArticleModule { }

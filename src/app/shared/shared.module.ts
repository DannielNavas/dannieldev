import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoListPipe } from './pipes/repo-list-pipe.pipe';
import { ImageErrorDirective } from './directives/image-error.directive';

@NgModule({
  declarations: [RepoListPipe, ImageErrorDirective],
  imports: [CommonModule],
  exports: [RepoListPipe, ImageErrorDirective],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoListPipe } from './pipes/repo-list-pipe.pipe';

@NgModule({
  declarations: [RepoListPipe],
  imports: [CommonModule],
  exports: [RepoListPipe],
})
export class SharedModule {}

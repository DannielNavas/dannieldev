import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubComponent } from './components/github/github.component';



@NgModule({
  declarations: [GithubComponent],
  imports: [CommonModule],
  exports: [GithubComponent]
})
export class SharedModule { }

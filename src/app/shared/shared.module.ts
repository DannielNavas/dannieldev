import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubComponent } from './components/github/github.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [GithubComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [GithubComponent, HeaderComponent]
})
export class SharedModule { }

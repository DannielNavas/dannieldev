import { Pipe, PipeTransform } from '@angular/core';
import { GithubRepos } from '@core/models/github/github.repos';

@Pipe({
  name: 'randomlist'
})
export class RepoListPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): unknown {
    if (value) {
      let repos = [];
      if(Number(args[0]) !== 0) {
        let random = 0;
        let history = [];
        for(let i = 0; i < args[0]; i++) {
          random = Math.floor(Math.random() * value.length);
          if (history.filter(item => item === random).length === 0) {
            repos.push(value[random]);
            history.push(random);
          } else {
            i--;
          }
        }
      } else {
        repos = value;
      }
      return repos;
    }
    return null;
  }

}

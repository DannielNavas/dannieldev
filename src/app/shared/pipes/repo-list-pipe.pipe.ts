import { Pipe, PipeTransform } from '@angular/core';
import { IResponseGithub } from '@core/models/github/response-github';

@Pipe({
  name: 'randomlist',
})
export class RepoListPipe implements PipeTransform {
  transform(value: any[], ...args: number[]): any[] {
    if (value && Number(args[0]) !== 0) {
      value = value.sort(() => Math.random() * value.length);
      return value.slice(0, args[0]);
    }
    return value;
  }
}

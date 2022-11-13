import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomlist',
})
export class RepoListPipe implements PipeTransform {
    transform(value: any[], ...args: number[]): any[] {
        if (value && Number(args[0]) !== 0) {
            value = value.sort((a, b) => new Date(b.pushed_at
).getTime() - new Date(a.pushed_at).getTime());
      return value.slice(0, args[0]);
    }
    return value;
  }
}

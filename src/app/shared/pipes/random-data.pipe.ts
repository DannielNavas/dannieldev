import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomData'
})
export class RandomDataPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hundredthousand',
  standalone: true
})
export class HundredthousandPipe implements PipeTransform {

  transform(num: number): string | number {
    if (num == 0) {
      return 0
    }
    if (num < 1000) {
      return `${num}`
    }

    return `${Math.floor(num / 1000)}K`


  }

}

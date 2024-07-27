import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHours',
  standalone: true
})
export class MinutesToHoursPipe implements PipeTransform {

  transform(minutes: number): string {
    if (isNaN(minutes) || minutes < 0) {
      return '0';
    }
    let hours = Math.floor(minutes / 60)
    let min = minutes % 60
    let str = (hours== 0? '' : `${hours}h `) + (min == 0 ? '' : `${min}m`)
    return str;
  }

}

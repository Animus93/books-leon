import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLength'
})
export class MaxLengthPipe implements PipeTransform {
  transform(value: string | null, maxLength: number): string {
    if (typeof value === 'string') {

      if (value.length > maxLength) {
        return value.substring(0, maxLength) + '...';
      }
      return value;
    }
    return ''
  }

}

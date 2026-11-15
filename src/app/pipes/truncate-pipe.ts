import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string | null | undefined, length = 75): string {
    if (!value) {
      return '';
    }

    if (value.length <= length) {
      return value;
    }

    return value.slice(0, length) + '...';
  }
}

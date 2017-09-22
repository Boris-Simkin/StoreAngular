import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollars'
})
export class DollarsPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return "$" + value;
  }

}

import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'uppercase'
})

@Injectable()
export class Uppercase {
  transform(value: any) : string {
    if (!value) {
      return '';
    }
    value = value + ''; // make sure it's a string
    return value.toUpperCase();
  }
}

import { FormControl } from '@angular/forms';

export class CustomValidation {


    static negative(control:FormControl):{ [key: string]: any; } {
        if (Number(control.value) <= 0) {
          return {negative: true};
        } else {
          return null;
        }
      }
}
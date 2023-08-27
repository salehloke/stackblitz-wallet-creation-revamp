import { AbstractControl } from '@angular/forms';

export interface ContactFormModel {
  age: AbstractControl<number | null>; // this is base class for FormControl.
  name: AbstractControl<string | null>;
}

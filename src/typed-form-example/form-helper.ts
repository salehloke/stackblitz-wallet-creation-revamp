import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';

export class TypedFormExampleHelper {
  static initForm() {
    const newForm = new FormGroup({
      age: new FormControl(0),
      name: new FormControl(null),
    });

    return newForm;
  }

  static nameSideEffects(nameFormControl: FormControl<string | any>) {
    nameFormControl.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      //print out on every changes
      console.log;
    });
  }
}

import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export function requiredIfTouched(control: AbstractControl): ValidationErrors | null {
  if (control.touched && control.value === '') {
    return Validators.required(control);
  }
  return null;
}

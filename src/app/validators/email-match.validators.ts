import { AbstractControl, ValidatorFn } from '@angular/forms';

export function emailMatchValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const email = control.get('email');
    const confirmEmail = control.get('confirmEmail');

    if (!email || !confirmEmail) {
      return null;
    }

    const match = email.value === confirmEmail.value;
    return match ? null : { 'emailMismatch': true };
  };
}

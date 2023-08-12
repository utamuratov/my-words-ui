import { FormGroup } from '@angular/forms';

export function markAsDirty(form: FormGroup) {
  Object.values(form.controls).forEach((control) => {
    if (control.invalid) {
      control.markAsDirty();
      control.updateValueAndValidity({ onlySelf: true });
    }
  });
}

export function addPrefixToPhoneNumber(model: { phoneNumber: string }) {
  model.phoneNumber = `998` + model.phoneNumber;
}

import { AbstractControl, ValidationErrors } from '@angular/forms';
export function validateCity(
  control: AbstractControl
): ValidationErrors | null {
  const allowedCities = ['Graz', 'Hamburg', 'Berling'];

  if (!allowedCities.includes(control.value)) {
    return {
      city:{
        allowedCities,
        actualValue: control.value
      }
    };
  }

  return null;
}

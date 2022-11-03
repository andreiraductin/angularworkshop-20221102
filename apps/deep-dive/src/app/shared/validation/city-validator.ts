import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
export function validateCity(
  control: AbstractControl
): ValidationErrors | null {
  const allowedCities = ['Graz', 'Hamburg', 'Berling'];

  if (!allowedCities.includes(control.value)) {
    return {
      city: {
        allowedCities,
        actualValue: control.value,
      },
    };
  }

  return null;
}

export function validateCityWithParams(allowedCities: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!allowedCities.includes(control.value)) {
      return {
        city: {
          allowedCities,
          actualValue: control.value,
        },
      };
    }
    return null;
  };
}

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function validateRoundTrip(control: AbstractControl): ValidationErrors | null{
    const group = control as FormGroup<{ from : AbstractControl; to: AbstractControl }>;

    const from = group.controls.from;
    const to = group.controls.to;

    if(!from || !to){
        return null;
    }

    if(from.value === to.value){
        return {roundTrip: true};
    }

    return null;
}

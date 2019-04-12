import { AbstractControl } from "@angular/forms";

export function passwordEqual(form: AbstractControl): { [key: string] : any } | null {
  const areEqual = form.value.password === form.value.repeatPassword;
  return !areEqual ? { notEqual: true } : null;
}

export function checkDayofBirth(form: AbstractControl): { [key: string] : any } | null {
  const dayofBirth = form.value.date_of_birth_day
  const isDayCorrect = typeof dayofBirth === 'number' && (dayofBirth < 31 && dayofBirth >= 1);
  return !isDayCorrect ? { notCorrect: true } : null;
}

export function checkMonthofBirth(form: AbstractControl): { [key: string] : any } | null {
  const monthofBirth = form.value.date_of_birth_month
  const isMonthCorrect = typeof monthofBirth === 'number' && (monthofBirth <= 12 && monthofBirth > 0);
  return !isMonthCorrect ? { notCorrect: true } : null;
}

export function checkYearofBirth(form: AbstractControl): { [key: string] : any } | null {
  const yearofBirth = form.value.date_of_birth_year
  const isYearCorrect = typeof yearofBirth === 'number';
  return !isYearCorrect ? { notCorrect: true } : null;
}

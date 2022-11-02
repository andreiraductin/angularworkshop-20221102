import { InjectionToken } from '@angular/core';

export const BASE_URL = new InjectionToken('BASE_URL', {
  providedIn: 'root',
  factory: () => 'http://www.angular.at/api',
});

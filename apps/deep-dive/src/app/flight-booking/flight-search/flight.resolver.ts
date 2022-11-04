import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { delay, Observable } from 'rxjs';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Injectable({
  providedIn: 'root',
})
export class FlightResolver implements Resolve<Flight> {

  constructor(private flightService: FlightService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Flight> {
    const id = route.params['id'];
    // return this.flightService.findById(id)
    return this.flightService.findById(id).pipe(delay(3000)); // <-- delay!
  }
}

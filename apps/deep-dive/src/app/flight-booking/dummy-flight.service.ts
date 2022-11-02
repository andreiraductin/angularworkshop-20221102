import { FlightService } from './flight.service';
import { Injectable } from '@angular/core';
import { Flight } from './flight';
import { Observable,of } from 'rxjs';

@Injectable()
export class DummyFlightService implements FlightService{

  constructor() { }

  flights: Flight[] = [
    {
      id: 123,
      from: 'London',
      to: 'Bucharest',
      date: new Date().toISOString(),
      delayed: false
    }
  ];


  load(from: string, to: string): void {
  }

  find(from: string, to: string): Observable<Flight[]> {
    return of(this.flights);
  }

  delay(): void {
  }
}

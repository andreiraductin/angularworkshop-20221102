import { FlightService } from './flight.service';
import { Injectable } from '@angular/core';
import { Flight } from './flight';
import { Observable,of } from 'rxjs';

@Injectable(   { providedIn: 'root' })
export class DummyFlightService implements FlightService{

  flights: Flight[] = [
    { id: 1, from: 'Frankfurt', to: 'Flagranti', date: '2022-01-02T19:00+01:00' },
    { id: 2, from: 'Frankfurt', to: 'Kognito', date: '2022-01-02T19:30+01:00' },
    { id: 3, from: 'Frankfurt', to: 'Mallorca', date: '2022-01-02T20:00+01:00' },
  ];

  constructor() { }


  load(from: string, to: string): void {
    this.find(from, to).subscribe({
      next: (flights) => {
        this.flights = flights;
      },
      error: (err) => {
        console.error('error', err);
      }
    });
  }

  find(from: string, to: string): Observable<Flight[]> {
    return of([
      { id: 1, from: 'Frankfurt', to: 'Flagranti', date: '2022-01-02T19:00+01:00' },
      { id: 2, from: 'Frankfurt', to: 'Kognito', date: '2022-01-02T19:30+01:00' },
      { id: 3, from: 'Frankfurt', to: 'Mallorca', date: '2022-01-02T20:00+01:00' },
    ]);
  }

  delay(): void {
  }
}

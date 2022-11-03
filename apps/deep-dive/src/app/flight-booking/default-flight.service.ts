

// src/app/default-flight.service.ts

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './flight';
import { FlightService } from './flight.service';
// Add this import:
import { BASE_URL } from './tokens';

@Injectable(
   { providedIn: 'root' }
)
export class DefaultFlightService implements FlightService{

  // We will refactor this to an observable in a later exercise!
  flights: Flight[] = [];

  constructor(private http: HttpClient,
               // Inject BASE_URL:
              @Inject(BASE_URL) private baseUrl: string,     
    ) { }

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
    const url = this.baseUrl + 'flight';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const params = new HttpParams()
      .set('from', from)
      .set('to', to);

    return this.http.get<Flight[]>(url, {headers, params});
  }

  delay(): void {
    const date = new Date(this.flights[0].date);
    date.setTime(date.getTime() + 1000 * 60 * 15);
    this.flights[0].date = date.toISOString();
  }

}

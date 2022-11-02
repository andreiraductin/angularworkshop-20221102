import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './flight';

@Injectable()
// {providedIn: 'root'}
export abstract class FlightService {
  // We will refactor this to an observable in a later exercise!
  flights: Flight[] = [];

  abstract load(from: string, to: string): void;

  abstract find(from: string, to: string): Observable<Flight[]>;

  abstract delay(): void;
}

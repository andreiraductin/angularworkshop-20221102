// src/app/flight-search/flight-search.component.ts

import { Component, Inject, OnInit } from '@angular/core';
import { DummyFlightService } from '../dummy-flight.service';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
  // providers: [
  //   {
  //     provide: FlightService,
  //     useClass: DummyFlightService
  //   }
  // ]
})
export class FlightSearchComponent implements OnInit {

  from = 'Hamburg';
  to = 'Graz';
  selectedFlight: Flight | null = null;
  delayFilter = false;

  // consumeFlightService: FlightService  = this.flightServices[1]; // [0]

  get flights() {
    // We will refactor this to an observable in a later exercise!
    return this.flightService.flights;
  }

  basket: { [key: number]: boolean } = {
    3: true,
    5: true
  };

  // constructor(@Inject(FlightService) private flightServices: FlightService[]) {
    constructor(private flightService: FlightService) {

  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }

  search(): void {
    this.flightService.load(this.from, this.to);
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

  delay(): void {
    this.flightService.delay();
  }

}

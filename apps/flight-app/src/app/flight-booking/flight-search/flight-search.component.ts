import {Component, OnInit} from '@angular/core';
import {FlightService} from '@flight-workspace/flight-lib';
import { Store } from '@ngrx/store';
import { flightsLoaded } from '../+state/flight-booking.actions';
import { FlightBookingAppState } from '../+state/flight-booking.reducer';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from = 'Hamburg'; // in Germany
  to = 'Graz'; // in Austria
  urgent = false;

  get flights() {
    return this.flightService.flights;
  }

  // "shopping basket" with selected flights
  basket: { [id: number]: boolean } = {
    3: true,
    5: true
  };

  flights$ = this.store.select(s => s.flightBooking.flights);

  constructor(
    private flightService: FlightService,
    private store: Store<FlightBookingAppState>) {
      
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  search(): void {
    if (!this.from || !this.to) return;

    this.flightService
    .find(this.from, this.to, this.urgent)
    .subscribe({
      next: flights => { 
        this.store.dispatch(flightsLoaded({flights}));
      },
      error: error => {
        console.error('error', error);
      } 
    });
  }

  delay(): void {
    this.flightService.delay();
  }

}

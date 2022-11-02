import { HttpClient } from '@angular/common/http';
import { DummyFlightService } from './dummy-flight.service';
import { FlightService } from './flight.service';
// src/app/flight-booking/flight-booking.module.ts

import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { FlightBookingComponent } from './flight-booking.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FormsModule } from '@angular/forms';
import { DefaultFlightService } from './default-flight.service';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES),
    FormsModule,
    SharedModule
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    PassengerSearchComponent,
    FlightBookingComponent,
    FlightEditComponent
  ],
  providers:[
    {
     provide: FlightService,
    //  useClass: DefaultFlightService,
     useFactory: (http: HttpClient) => {
        if(environment.dummyFlightService){
          return new DummyFlightService();
        }else{
          return new DefaultFlightService(http); //default here? check recording
        }
     }, deps: [HttpClient]
    }
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }

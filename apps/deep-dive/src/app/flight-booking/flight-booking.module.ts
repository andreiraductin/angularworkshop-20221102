import { FlightService } from './flight.service';
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
      useClass: DefaultFlightService,
    //  useFactory: (http: HttpClient) => {
    //     if(environment.dummyFlightService){
    //       return new DummyFlightService();
    //     }else{
    //       return new DefaultFlightService(http); //default here? check recording
    //     }
    //  }, deps: [HttpClient]
      }

  //  { provide: FlightService, useClass: DefaultFlightService, multi: true},
  //  { provide: FlightService, useClass: DummyFlightService, multi: true},
 ],
//   providers: [
//     {
//        provide: FlightService,
//        useFactory: createFlightService,
//        deps: [HttpClient]
//     }
//  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }

import { Flight } from '@flight-workspace/flight-lib';
import { Action, createReducer, on } from '@ngrx/store';
import * as FlightBookingActions from './flight-booking.actions';

export const flightBookingFeatureKey = 'flightBooking';

export interface State {
  flights: Flight[];
  negativeList: number[]
}

export interface FlightBookingAppState {
  flightBooking: State
}


export const initialState: State = {
  flights: [],
  negativeList: [3]
};

export const reducer = createReducer(
  initialState,

  on(FlightBookingActions.loadFlightBookings, state => state),
  on(FlightBookingActions.loadFlightBookingsSuccess, (state, action) => state),
  on(FlightBookingActions.loadFlightBookingsFailure, (state, action) => state),

);

export const flightBookingReducer = createReducer(
  initialState,

  on(FlightBookingActions.flightsLoaded, (state, action) => {
    const flights = action.flights;
    return { ...state, flights };
  }),

  on(FlightBookingActions.updateFlight, (state, action) => {
    const flight = action.flight;
    const flights = state.flights.map(f => f.id === flight.id? flight: f);
    return { ...state, flights };
  })
)


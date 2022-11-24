import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FlightBookingAppState, State } from "./flight-booking.reducer";

// export const selectFlights = (s: FlightBookingAppState) => s.flightBooking.flights;
// export const negativeList = (s: FlightBookingAppState) => s.flightBooking.negativeList;

// export const selectedFilteredFlights = createSelector(
//     selectFlights,
//     negativeList,
//     (flights, negativeList) => flights.filter(f => !negativeList.includes(f.id))
// );

// Create feature selector
export const selectFlightBooking = createFeatureSelector<State>('flightBooking');

// Use feature selector to get data from feature branch
export const selectFlights = createSelector(selectFlightBooking, s => s.flights);

export const negativeList = createSelector(selectFlightBooking, s => s.negativeList);

export const selectFlightsWithParam = (blockedFlights: number[]) => createSelector(
  selectFlights,
  (flights) => flights.filter(f => !blockedFlights.includes(f.id))
);


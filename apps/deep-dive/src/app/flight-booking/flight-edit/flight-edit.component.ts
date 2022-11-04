import { CanDeactivateComponent } from './../../shared/deactivation/can-deactivate.guard';
// src/app/flight-booking/flight-edit/flight-edit.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { validateCity, validateCityWithParams, validateRoundTrip } from '../../shared/validation/city-validator';
import { Observable, Observer } from 'rxjs';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent implements OnInit, CanDeactivateComponent  {

  id = 0;
  showDetails = false;
  sender: Observer<boolean> | undefined;
  showWarning = false;
  flight: any = {};  
   editForm:any; 

  constructor(
    private route: ActivatedRoute, 
    private fb: FormBuilder) {
      // this.editForm.valueChanges.subscribe(
      //   console.log        
      // )
    }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });
   
    this.route.data.subscribe(routeData => {
      this.flight = routeData['flight'];
    });


    this.editForm  = this.fb.nonNullable.group({
      id: [this.flight.id],
      from: [this.flight.from,
       [Validators.required,
        Validators.minLength(3),
        validateCityWithParams(['Hamburg', 'Paris'])]
      ],
      to: [this.flight.to,
       [Validators.required,
        validateCityWithParams(['Londra', 'Paris', 'Graz'])]],
      date: [this.flight.date],
      delated: [this.flight.delayed]
    });
    this.editForm.validator = validateRoundTrip;
  }

  save(){
    console.log('value', this.editForm.value);
    console.log('value (all properties', this.editForm.getRawValue());
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);    
  }

  decide(decision: boolean): void {
    this.showWarning = false;
    if (this.sender) {
        this.sender.next(decision);
        this.sender.complete();
    }
}

  canDeactivate(): Observable<boolean> {
    return new Observable((sender: Observer<boolean>) => {
        this.sender = sender;
        this.showWarning = true;
    });
}

}

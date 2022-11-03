// src/app/flight-booking/flight-edit/flight-edit.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { validateCity, validateCityWithParams, validateRoundTrip } from '../../shared/validation/city-validator';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent implements OnInit {

  id = 0;
  showDetails = false;

  editForm  = this.fb.nonNullable.group({
    id: [0],
    from: ['Graz', 
     [Validators.required,
      Validators.minLength(3),
      validateCityWithParams(['Hamburg', 'Paris'])]
    ],
    to: ['Bucharest',
     [Validators.required,
      validateCityWithParams(['Londra', 'Paris'])]],
    date: [new Date().toISOString()]
});

  constructor(
    private route: ActivatedRoute, 
    private fb: FormBuilder) {
      this.editForm.valueChanges.subscribe(
        console.log        
      )
    }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });
    this.editForm.validator = validateRoundTrip;
  }

  save(){
    console.log('value', this.editForm.value);
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);    
  }

}

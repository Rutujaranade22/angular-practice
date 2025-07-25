import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-event-registration',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './event-registration.html',
  styleUrls: ['./event-registration.css']
})
export class EventRegistration {

  eventForm = new FormGroup({
    name: new FormGroup({
      prefix: new FormControl('Mr.'),
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required])
    }),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    hasGuest: new FormControl(true),
    guest: new FormGroup({
      prefix: new FormControl('Mr.'),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl('')
    }),
    updates: new FormControl(true)
  });

  formValue: any;

  onSubmit() {
    this.formValue = this.eventForm.value;
    console.log("Submitted Form:", this.formValue);
  }
}

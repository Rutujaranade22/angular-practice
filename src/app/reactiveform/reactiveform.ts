import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

 @Component({
  selector: 'app-reactiveform',
  imports: [ReactiveFormsModule,JsonPipe],
   templateUrl: './reactiveform.html',
  styleUrl: './reactiveform.css'
})
export class Reactiveform {
 studentDetails:FormGroup = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastName:new FormControl(''),
    address:new FormControl(''),
    city:new FormControl('',[Validators.required]),
    zip:new FormControl(0),
    isAccept:new FormControl(false)
  });

  formValue:any;

  saveForm(){
    this.formValue = this.studentDetails.value;
  }
}

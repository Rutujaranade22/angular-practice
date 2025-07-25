import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-user-registration',
  imports:[FormsModule],
  standalone:true,
  templateUrl: './user-registration.html',

  styleUrls: ['./user-registration.css']
})
export class UserRegistration {
  user = {
    fullName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    gender: ''
  };

  onSubmit(form: any) {
    console.log('Form Submitted', form.value);
  }
}

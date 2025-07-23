import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';  

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule],  
  templateUrl: './forms.html',
  styleUrl: './forms.css'
})
export class Forms {
  onSubmit(form: NgForm) {
    console.log("Student Data:", form.value);
  }
}

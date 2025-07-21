import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  languageName: string = "Angular";
  name: string = "Mahi..";
  inputText: string = "checkbox";
  courseName: string = "Javascript";
  imgUrl: string = "https://..."; // Image URL
  imgMessage: string = "Image not found";
  empName: string = "";


  greet() {
  alert("Welcome to Angular session");
}

spanMsg() {
  alert("Span Click works...!");
}

}
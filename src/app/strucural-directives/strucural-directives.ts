import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-strucural-directives',
  imports: [CommonModule,FormsModule],
  standalone: true,

  templateUrl: './strucural-directives.html',
  styleUrl: './strucural-directives.css'
})
export class StrucuralDirectives {
  isDivVisible1: boolean = false;
toggleDiv2: boolean = true;
num1: string = "";
num2: string = "";
active: boolean = true;
hideDiv1() {
  this.isDivVisible1 = false;
}
showDiv2() {
  this.isDivVisible1 = true;
}
toggle() {
  this.toggleDiv2 = !this.toggleDiv2;
}



}

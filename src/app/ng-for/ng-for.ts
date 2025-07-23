import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [CommonModule],
  templateUrl: './ng-for.html',
  styleUrl: './ng-for.css'
})
export class NgFor {
  names:string[]=['Rutuja','Sarthak','shraddha','shreyash'];

}

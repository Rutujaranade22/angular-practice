import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-switch',
  imports: [CommonModule,FormsModule],
  templateUrl: './ng-switch.html',
  styleUrl: './ng-switch.css'
})
export class NgSwitch {
selectedFruit: string = '';  
}

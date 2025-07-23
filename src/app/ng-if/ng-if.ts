import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [FormsModule,CommonModule],
  standalone:true,
  templateUrl: './ng-if.html',
  styleUrl: './ng-if.css'
})
export class NgIf {
  userName:string= '';

}

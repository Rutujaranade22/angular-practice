import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './alert.html',
  styleUrl: './alert.css'
})
export class Alert {
  @Input() message: string = 'This is an alert!';
  @Input() alertType: string = 'alert-warning';  
}

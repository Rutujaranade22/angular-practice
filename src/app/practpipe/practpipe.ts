import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-practpipe',
  imports: [CommonModule],
  templateUrl: './practpipe.html',
  styleUrl: './practpipe.css'
})
export class Practpipe {
  userName: string = 'rutuja ranade';
  amount: number = 12345.678;
  currentDate: Date = new Date();
 }

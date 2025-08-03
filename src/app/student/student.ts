import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { DataService } from '../data-service';
import { CommonModule } from '@angular/common';
 @Component({
  selector: 'app-student',
    standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student  {
students: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.students = this.dataService.getStudentData();
  }
}
 

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-crud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-crud.html',
  styleUrl: './student-crud.css'
})
export class StudentCrud {

  studentList: any[] = [];

  student: any = {
    id: 0,
    name: '',
    email: ''
  };

  addStudent() {
    if (this.student.id === 0) {
      this.student.id = new Date().getTime(); // Unique ID
      this.studentList.push({ ...this.student });
      this.resetForm();
    } else {
      const index = this.studentList.findIndex(s => s.id === this.student.id);
      this.studentList[index] = { ...this.student };
      this.resetForm();
    }
  }

  editStudent(student: any) {
    this.student = { ...student };
  }

  deleteStudent(id: number) {
    if (confirm("Are you sure you want to delete?")) {
      this.studentList = this.studentList.filter(s => s.id !== id);
    }
  }

  resetForm() {
    this.student = {
      id: 0,
      name: '',
      email: ''
    };
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor() { }
  getStudentData() {
    return [
      { id: 1, name: 'Rutuja', course: 'Angular' },
      { id: 2, name: 'Sarthak', course: 'React' },
      { id: 3, name: 'Sneha', course: 'Vue' }
    ];
  }
}

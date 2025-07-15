import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './student/student';
import { Typescript } from './typescript/typescript';
import { DataBinding } from './data-binding/data-binding';
import { StrucuralDirectives } from './strucural-directives/strucural-directives';
import { CounterApp } from './counter-app/counter-app';
 @Component({
  selector: 'app-root',
  imports: [Student,Typescript,DataBinding,StrucuralDirectives,CounterApp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-practice';
}

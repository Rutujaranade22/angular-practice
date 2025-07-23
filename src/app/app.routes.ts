import { Routes } from '@angular/router';
import { Student } from './student/student';
import { DataBinding } from './data-binding/data-binding';
import { StrucuralDirectives } from './strucural-directives/strucural-directives';
import { Typescript } from './typescript/typescript';
import { CounterApp } from './counter-app/counter-app';
import { NgIf } from './ng-if/ng-if';
import { NgFor } from './ng-for/ng-for';
import { NgSwitch } from './ng-switch/ng-switch';

export const routes: Routes = [
    {
        path:"student",
        component:Student
    },
    {    path:"databinding",
        component:DataBinding
    },
    {
        path:"directives",
        component:StrucuralDirectives
    },
    {
        path:"typescript",
        component:Typescript
    },
    {
        path:"couterapp",
        component:CounterApp

    },
    {
        path:"ngIF",
        component:NgIf
    },
    {
        path:"ngFor",
        component:NgFor
    },
    {
        path:"ngswitch",
        component:NgSwitch
    }
];

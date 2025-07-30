import { Routes } from '@angular/router';
import { Student } from './student/student';
import { DataBinding } from './data-binding/data-binding';
import { StrucuralDirectives } from './strucural-directives/strucural-directives';
import { Typescript } from './typescript/typescript';
import { CounterApp } from './counter-app/counter-app';
import { NgIf } from './ng-if/ng-if';
import { NgFor } from './ng-for/ng-for';
import { NgSwitch } from './ng-switch/ng-switch';
import { Component, Pipe } from '@angular/core';
import { Practpipe } from './practpipe/practpipe';
import { Forms } from './forms/forms';
import { Reactiveform } from './reactiveform/reactiveform';
import { EventRegistration } from './event-registration/event-registration';
import { UserRegistration } from './user-registration/user-registration';
import { ApiIntegration } from './api-integration/api-integration';
import { StudentCrud } from './student-crud/student-crud';

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
    },
     {
        path:"pipe",
        component:Practpipe
     },
     {
        path:"forms",
        component:Forms
     },
     {
     path:"reactiveform",
     component:Reactiveform
     },
     {
        path:"eventregi",
        component:EventRegistration
     },
     {
        path:"userregi",
        component:UserRegistration
     },
     {
        path:"api-integration",
        component:ApiIntegration
     },
     {
        path:"student-crud",
        component: StudentCrud
     }
   
];

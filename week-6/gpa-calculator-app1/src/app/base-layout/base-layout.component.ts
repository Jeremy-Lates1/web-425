/**
 * Title: base-layout.component.ts
 * Author: Jeremy Lates
 * Date: 04-26-2024
 * Description: base-layout component
 * Notes:
 * Code Adapted from https://github.com/buwebdev/web-425/blob/master/week-6/gpa-calculator-app1/src/app/base-layout/base-layout.component.ts
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css'],
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.3 - Layouts';
  }

  ngOnInit(): void {}
}

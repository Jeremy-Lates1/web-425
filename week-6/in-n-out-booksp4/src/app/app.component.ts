/**
 * Title: app.component.ts
 * Author: Jeremy Lates
 * Date: 04-24-2024
 * Description: App component
 * Note
 * Code was adapted from https://github.com/buwebdev/web-425/blob/master/week-6/in-n-out-booksp4/src/app/app.component.ts
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.2 - Input/Output Properties, Part 1';
  }
}

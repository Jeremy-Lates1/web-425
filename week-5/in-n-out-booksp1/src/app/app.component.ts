/**
 * Title: app.component.ts
 * Author: Jeremy Lates
 * Date: 04-19-2024
 * Description: App component
 * Note
 * Code was adapted from https://github.com/buwebdev/web-425/blob/master/week-5/in-n-out-booksp1/src/app/app.module.ts
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
    this.assignment = 'Exercise 5.2 - Navigation and Layout';
  }
}

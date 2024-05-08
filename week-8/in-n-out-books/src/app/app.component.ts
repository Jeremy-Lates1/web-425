/**
 * Title: app.component.ts
 * Author: Jeremy Lates
 * Date: 05-08-2024
 * Description: App component
 * Note
 * Code was adapted from https://github.com/buwebdev/web-425/blob/master/week-8/in-n-out-books/src/app/app.component.ts
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
    this.assignment = 'Welcome to In-N-Out-Books';
  }
}

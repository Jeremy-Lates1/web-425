/**
 * Title: app.component.ts
 * Author: Jeremy Lates
 * Date: 03/24/2024
 * Description: App component
 * Note:
 * COde adapted from https://github.com/buwebdev/web-425/blob/master/week-2/enhanced-profile-app/src/app/app.component.ts
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoggedIn: boolean = true;
  assignment = 'Exercise 2.3 - Data Binding';
  //title = 'enhanced-profile-app';
}

/**
 * Title: base-layout.component.ts
 * Author: Jeremy Lates
 * Date: 04-27-2024
 * Description: base-layout component
 * Notes:
 * Code Adapted from https://github.com/buwebdev/web-425/blob/master/week-6/gpa-calculator-app2/src/app/base-layout/base-layout.component.ts
 */

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css'],
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'Exercise 7.2 - Reactive Forms';
  }

  ngOnInit(): void {}
  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }
}

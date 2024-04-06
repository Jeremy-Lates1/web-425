/**
 * Title: sign-in.component.ts
 * Author: Jeremy Lates
 * Date: 04-04-2024
 * Description: Sign-in component (sign-in page)
 * Note:
 * Code was adapted from https://github.com/buwebdev/web-425/blob/master/week-3/secure-profile-app/src/app/sign-in/sign-in.component.ts
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  isLoggedIn = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  signin() {
    this.isLoggedIn = true;

    this.router.navigate(['/home'], {
      queryParams: { isLoggedIn: this.isLoggedIn },
      skipLocationChange: true,
    });
  }
}

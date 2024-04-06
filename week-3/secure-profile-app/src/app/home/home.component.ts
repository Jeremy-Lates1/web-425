/**
 * Title: home.component.ts
 * Author: Jeremy Lates
 * Date: 04-06-2024
 * Description: Home component (Home page)
 * Note:
 * Code adapted from https://github.com/buwebdev/web-425/blob/master/week-3/secure-profile-app/src/app/home/home.component.ts
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(
      this.route.snapshot.queryParamMap.get('isLoggedIn')
    );
  }

  ngOnInit(): void {}
}

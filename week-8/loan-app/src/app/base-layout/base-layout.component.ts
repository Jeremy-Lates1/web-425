/**
 * Title: base-layout.component.ts
 * Author: Jeremy Lates
 * Date: 05-12-2024
 * Description: Base Layout
 * Notes:
 * Code Adapted from Professor Krasso videos and github source code https://github.com/buwebdev/web-425
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
    this.assignment = 'Loan App';
  }

  ngOnInit(): void {}
}

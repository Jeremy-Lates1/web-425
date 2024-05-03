/**
 * Title: sign-in.component.ts
 * Author: Jeremy Lates
 * Date: 05-02-2024
 * Description:
 * Notes:
 * Code Adapted from https://github.com/buwebdev/web-425/blob/master/week-7/gpa-calculator-app3/src/app/sign-in.service.ts
 */

import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  signinForm: FormGroup;
  errorMessage: string;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private fb: FormBuilder,
    private signinService: SignInService
  ) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      studentId: '',
    });
  }
  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

    //If true then add cookie to users browser and navigate to the root path otherwise post error message
    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/']);
    } else {
      this.errorMessage = `The student ID you entered is invalid, please try again.`;
    }
  }
}

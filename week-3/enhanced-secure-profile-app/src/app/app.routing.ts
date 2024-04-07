/**
 * Title: app.routing.ts
 * Author: Jeremy Lates
 * Date: 04/07/2024
 * Description: App routing
 * Note:
 * Code is adapted from https://github.com/buwebdev/web-425/blob/master/week-3/enhanced-secure-profile-app/src/app/app.routing.ts
 */
import { SignInComponent } from './sign-in/sign-in.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInGuard } from './sign-in.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SignInGuard],
  },
];

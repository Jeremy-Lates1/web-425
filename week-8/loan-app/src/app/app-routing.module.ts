/**
 * Title: app-routing.module.ts
 * Author: Jeremy Lates
 * Date: 05-12-2024
 * Description: App routing Module
 * Notes:
 * Code Adapted from Professor Krasso videos and github source code https://github.com/buwebdev/web-425
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: 'contact',
        component: ContactUsComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

/**
 * Title: app-routing.module.ts
 * Author: Jeremy Lates
 * Date: 03/29/2024
 * Description: Routing file
 * Note:
 * Code was adapted from https://github.com/buwebdev/web-425/blob/master/week-2/my-app/src/app/app-routing.module.ts
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

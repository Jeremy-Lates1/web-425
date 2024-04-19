/**
 * Title: app-routing.module.ts
 * Author: Jeremy Lates
 * Date: 04-19-2024
 * Description: Routing file
 * Note:
 * Code was adapted from https://github.com/buwebdev/web-425/blob/master/week-5/in-n-out-booksp1/src/app/app-routing.module.ts
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
  },
  {
    path: 'book-list',
    component: BookListComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

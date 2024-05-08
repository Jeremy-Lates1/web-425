/**
 * Title: app-routing.module.ts
 * Author: Jeremy Lates
 * Date: 04-24-2024
 * Description: Routing file
 * Note:
 * Code was adapted from https://github.com/buwebdev/web-425/blob/master/week-6/in-n-out-booksp4/src/app/app-routing.module.ts
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WishlistComponent } from './wishlist/wishlist.component';

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
  {
    path: 'wishlist',
    component: WishlistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

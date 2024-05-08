/**
 * Title: wishlist.component.ts
 * Author: Jeremy Lates
 * Date: 04-25-2024
 * Description: Wishlist component (Wishlist page)
 * Note:
 * Code was adapted from https://github.com/buwebdev/web-425/blob/master/week-6/in-n-out-booksp4/src/app/wishlist/wishlist.component.ts
 */

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  items: Array<IWishlistItem> = [];

  constructor() {}

  ngOnInit(): void {}

  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
    console.log(this.items);
  }
}

/**
 * Title: wishlist-create.component.ts
 * Author: Jeremy Lates
 * Date: 04-24-2024
 * Description: Component to create wishlist items (demonstrates Output properties)
 * Note:
 * Code adapted from https://github.com/buwebdev/web-425/blob/master/week-6/in-n-out-booksp4/src/app/wishlist-create/wishlist-create.component.ts
 */

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.css'],
})
export class WishlistCreateComponent implements OnInit {
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  item: IWishlistItem;

  constructor() {
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {}

  // Add item to wishlist
  addItem() {
    console.log(
      'Inside wishlist-create.component.ts (child) - addItem() function'
    );
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors,
    });

    this.item = {} as IWishlistItem;
  }
}

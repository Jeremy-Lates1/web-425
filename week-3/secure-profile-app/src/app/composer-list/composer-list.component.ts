/**
 * Title: composer-list.component.ts
 * Author: Jeremy Lates
 * Date: 03/30/2024
 * Description: Composer list component; displays a list of composers
 * Notes
 * COde adapted from https://github.com/buwebdev/web-425/blob/master/week-2/composer-app/src/app/composer-list/composer-list.component.ts
 */

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>;
  constructor() {
    this.composers = new Composer().getComposers();
  }

  ngOnInit(): void {}
}

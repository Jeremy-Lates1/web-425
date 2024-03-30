/**
 * Title: composer-list.component.ts
 * Author: Jeremy Lates
 * Date: 03/30/2024
 * Description: Composer list component; displays a list of composers
 * Notes
 * COde adapted from https://github.com/buwebdev/web-425/blob/master/week-2/composer-app/src/app/composer-list/composer-list.component.ts
 */

import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer('Ludwig van Beethoven', 'Classical'),
      new Composer('Johann Sebastian Bach', 'Classical'),
      new Composer('Wolfgang Amadeus Mozart', 'Classical'),
      new Composer('Johannes Brahms', 'Classical'),
      new Composer('Joseph Haydn', 'Classical'),
    ];
  }

  ngOnInit(): void {}
}

/**
 * Title: composer.service.ts
 * Author: Jeremy Lates
 * Date: 04/10/2024
 * Note:
 * Code is adapted from https://github.com/buwebdev/web-425/blob/master/week-4/di-composer-app/src/app/composer.service.ts
 */
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root',
})
export class ComposerService {
  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      { composerId: 100, fullName: 'Ludwig van Beethoven', genre: 'Classical' },
      {
        composerId: 101,
        fullName: 'Wolfgang Amadeus Mozart',
        genre: 'Classical',
      },
      {
        composerId: 102,
        fullName: 'Johannes Brahms',
        genre: 'Classical',
      },
      {
        composerId: 103,
        fullName: 'Joseph Haydn',
        genre: 'Classical',
      },
      {
        composerId: 104,
        fullName: 'Johann Sebastian Bach',
        genre: 'Classical',
      },
    ];
  }
  getComposers() {
    return this.composers;
  }
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}

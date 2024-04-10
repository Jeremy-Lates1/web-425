/**
 * Title: composer-list.component.ts
 * Author: Jeremy Lates
 * Date: 04/10/2024
 * Description: Composer list component; displays a list of composers
 * Notes
 * COde adapted from https://github.com/buwebdev/web-425/blob/master/week-4/di-composer-app/src/app/composer-list/composer-list.component.ts
 */

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>;
  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
  }

  ngOnInit(): void {}
}

/**
 * Title: book-details-dialog.component
 * Author: Jeremy Lates
 * Date: 04-20-2024
 * Description: Book details dialog (dialog box for displaying the details of a book)
 * Note:
 * Code was adapted from https://github.com/buwebdev/web-425/blob/master/week-5/in-n-out-booksp3/src/app/book-details-dialog/book-details-dialog.component.ts
 */

import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IBook } from '../book.interface';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.css'],
})
export class BookDetailsDialogComponent implements OnInit {
  book: IBook;

  constructor(
    private dialogRef: MatDialogRef<BookDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.book = data.book;
  }

  ngOnInit(): void {}
}

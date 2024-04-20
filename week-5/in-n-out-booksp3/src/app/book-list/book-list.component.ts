/**
 * Title: book-list.component
 * Author: Jeremy Lates
 * Date: 04-20-2024
 * Description: Book list component (Book list page)
 * Note:
 * Code adapted from https://github.com/buwebdev/web-425/blob/master/week-5/in-n-out-booksp3/src/app/book-list/book-list.component.ts
 */

import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook;

  //Declare observable
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    //Call getBooks from the book service
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {}

  //This method returns a book based on the isbn passed in
  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);

    //Open dialog with book details
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book,
      },
      disableClose: true,
      width: '800px',
    });

    console.log(this.book);

    //Close the dialog
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        this.book = null;
      }
    });
  }
}

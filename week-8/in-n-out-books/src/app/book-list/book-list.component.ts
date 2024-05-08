/**
 * Title: book-list.component
 * Author: Jeremy Lates
 * Date: 05-08-2024
 * Description: Book list component (Book list page)
 * Note:
 * Code adapted from https://github.com/buwebdev/web-425/blob/master/week-8/in-n-out-books/src/app/book-list/book-list.component.ts
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
  books: Array<IBook> = [];
  book: IBook;

  //Declare observable
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.booksService.getBooks().subscribe((res) => {
      console.log(res);
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function (author) {
              return author.name;
            });
          }

          this.books.push({
            isbn: res[key].details.isbn_13
              ? res[key].details.isbn_13
              : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle
              ? res[key].details.subtitle
              : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors,
          });
        }
      }
    });
  }

  ngOnInit(): void {}

  //This method returns a book based on the isbn passed in
  showBookDetails(isbn: string) {
    this.book = this.books.find((book) => book.isbn === isbn);

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

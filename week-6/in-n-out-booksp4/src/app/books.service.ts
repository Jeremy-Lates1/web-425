/**
 * Title: books.service.ts
 * Author: Jeremy Lates
 * Date: 04-20-2024
 * Description: Service class for book objects
 * Note:
 * Code was adapted from https://github.com/buwebdev/web-425/blob/master/week-5/in-n-out-booksp2/src/app/books.service.ts
 */

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '0345339681',
        title: 'Onyx Storm',
        description:
          'I never read this book in my life. I picked it from amazon books',
        numOfPages: 322,
        authors: ['Rebecca Tarros'],
      },
      {
        isbn: '0261103571',
        title: 'The House Maid',
        description:
          'I never read this book in my life. I picked it from amazon books',
        numOfPages: 432,
        authors: ['Frieda McFadden'],
      },
      {
        isbn: '1514297272',
        title: 'Iron Flame',
        description:
          'I never read this book in my life. I picked it from amazon books',
        numOfPages: 448,
        authors: ['Rebecca Tarros'],
      },
      {
        isbn: '1514298139',
        title: 'The Court of MIst and Fury',
        description:
          "'I never read this book in my life. I picked it from amazon books'",
        numOfPages: 432,
        authors: ['Sarah Maas'],
      },
      {
        isbn: '9780593099322',
        title: 'The Teacher',
        description:
          'I never read this book in my life. I picked it from amazon books',
        numOfPages: 688,
        authors: ['Freida McFadden'],
      },
    ];
  }
  //Return ALl Books
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  //Return book based on isbn but search all books for that isbn
  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }
}

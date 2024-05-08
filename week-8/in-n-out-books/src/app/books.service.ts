/**
 * Title: books.service.ts
 * Author: Jeremy Lates
 * Date: 05-08-2024
 * Description: Service class for book objects
 * Note:
 * Code was adapted from https://github.com/buwebdev/web-425/blob/master/week-8/in-n-out-books/src/app/books.service.ts
 */

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  isbns: Array<string> = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959',
  ];

  constructor(private http: HttpClient) {}
  //Return ALl Books
  getBooks() {
    let params = new HttpParams();

    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');
    return this.http.get('https://openlibrary.org/api/books', {
      params: params,
    });
  }
}

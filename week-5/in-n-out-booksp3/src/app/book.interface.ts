/**
 * Title: book.interface.ts
 * Author: Jeremy Lates
 * Date: 04-19-2024
 * Description: Book interface object
 * Note:
 * Code adapted from https://github.com/buwebdev/web-425/blob/master/week-5/in-n-out-booksp1/src/app/book.interface.ts
 */

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}

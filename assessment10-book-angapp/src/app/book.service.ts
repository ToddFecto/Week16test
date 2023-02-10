import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = [
    { title: 'Lord Fouls Bane', author: 'Stephen R. Donaldson', publicationYear: 1977 },
    { title: 'The Illearth War', author: 'Stephen R. Donaldson', publicationYear: 1977 },
    { title: 'The Power that Preserves', author: 'Stephen R. Donaldson', publicationYear: 1977 },
    { title: 'The Wounded Land', author: 'Stephen R. Donaldson', publicationYear: 1980 },
    { title: 'The One Tree', author: 'Stephen R. Donaldson', publicationYear: 1982 },
    { title: 'White Gold Wielder', author: 'Stephen R. Donaldson', publicationYear: 1983 },
    { title: 'The Runes of the Earth', author: 'Stephen R. Donaldson', publicationYear: 2004 },
    { title: 'Fatal Revenant', author: 'Stephen R. Donaldson', publicationYear: 2007 },
    { title: 'Against All Things Ending', author: 'Stephen R. Donaldson', publicationYear: 2010 },
    { title: 'The Last Dark', author: 'Stephen R. Donaldson', publicationYear: 2013 },
  ];

  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }

  add(book: Book) {
    this.books.push(book);
  }

  delete(book: Book) {
    let i = this.books.indexOf(book);
    if (i > -1) {
      this.books.splice(i, 1);
    }
  }

}
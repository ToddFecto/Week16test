import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  template: `<app-book (deleted)=`
})
export class BookListComponent implements OnInit {

  books: Book[];

  newTitle?: String;
  newAuthor?: String;
  newPublicationYear?: Number;

  constructor(private bkinventory: BookService) {
    this.books = this.bkinventory.getBooks();
    console.log(this.books);  // Used for Debugging in Console
  }

  ngOnInit(): void {
  }

  addBook() {
    if (this.newTitle && this.newAuthor && this.newPublicationYear) {
        this.bkinventory.add(
          {
            title: this.newTitle,
            author: this.newAuthor,
            publicationYear: this.newPublicationYear
          }
        );
    }
  }



  // Debug function
  debug() {
      console.log(this.bkinventory.getBooks());
      console.log(this.newTitle);
      console.log(this.newAuthor);
      console.log(this.newPublicationYear);
  }

}
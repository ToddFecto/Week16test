import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  template: `<button class='btn btn-primary' (click)="deleteBook()">Delete Book</button>`
})
export class BookComponent implements OnInit {

  @Input() book?: Book;

  @Output() deleted = new EventEmitter();
    counter = 0;

    deleteBook() {
      
      this.counter = this.counter + 1;
      this.deleted.emit(this.counter);
    }

  constructor(private inventory: BookService) { }

  ngOnInit(): void {
  }

}
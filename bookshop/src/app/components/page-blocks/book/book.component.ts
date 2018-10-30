import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() { }
  private bookTitle = 'Book Title';
  private bookAuthor = 'Book Author';

  ngOnInit() {
  }

}

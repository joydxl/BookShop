import { Component, OnInit } from '@angular/core';
import { BookComponent } from '../../page-blocks/book/book.component';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  private books: any;

  getBooks() {
    // get filtered array of books and return it
    this.books = [
      BookComponent,
      BookComponent,
      BookComponent,
      BookComponent,
      BookComponent,
      BookComponent,
      BookComponent,
    ]
  }


  constructor() {}

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FilteredBooks } from 'src/app/shared/models/shop-models';
import { DataService } from 'src/app/shared/services/data.service';

/* import { BookComponent } from '../../layouts/book/book.component';
import { FilteredBooks } from '../../../shared/models/shop-models'; */


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public books: Array<FilteredBooks> = [];

  /* getFilteredBooks() {
    // get filtered array of books and return it


    // Alternative if we may pass not all properties

    /* return [
      {'Id': 1, 'Title': 't1', 'URL': '//x-studio.com.ua/images/book.jpg'},
      {'Id': 2, 'Authors': ['a2'], 'URL': '//x-studio.com.ua/images/book.jpg'},
      {'Id': 3, 'Title': 't3', 'Authors': ['a3']}
    ];

    return [
      {'Id': 1, 'Title': 't1', 'Authors': ['a1'], 'URL': '//x-studio.com.ua/images/book.jpg'},
      {'Id': 2, 'Title': 't2', 'Authors': ['a2'], 'URL': '//x-studio.com.ua/images/book.jpg'},
      {'Id': 3, 'Title': 't3', 'Authors': ['a3'], 'URL': '//x-studio.com.ua/images/book.jpg'}
    ];
  } */

  constructor(private dataService: DataService) {}

  ngOnInit() {

    this.books = this.dataService.getBooks();


    // Alternative if we may pass not all properties

    /* for (const key in this.getFilteredBooks()) {
      if (this.getFilteredBooks().hasOwnProperty(key)) {
        this.books[key] = new FilteredBooks;
        for (const ikey in this.getFilteredBooks()[key]) {
          if (this.getFilteredBooks()[key].hasOwnProperty(ikey)) {
            this.books[key][ikey] = this.getFilteredBooks()[key][ikey];
          }
        }

      }
    } */

  }

}

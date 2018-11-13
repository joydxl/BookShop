import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/shop-models';
import { DataService } from 'src/app/shared/services/data.service';

/* import { BookComponent } from '../../layouts/book/book.component';
import { FilteredBooks } from '../../../shared/models/shop-models'; */


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public books: Array<Book> = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {

    this.books = this.dataService.getBooks();

  }

}

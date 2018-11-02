import { Component, OnInit } from '@angular/core';
import { Book, Author, Review } from '../../../shared/models/shop-models';
import { tick } from '@angular/core/src/render3';
// import { Review } from '../../../shared/models/shop-models';

@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrls: ['./bookpage.component.css']
})
export class BookpageComponent implements OnInit {

  private book = new Book;
  private author = new Author;

  private Revie1 = new Review;
  private Revie2 = new Review;

  constructor() { }

  getBook() {

    console.log('this.book.Id', this.book.Id);

    this.book.Id = 13;
    this.book.Authors = ['Screw Driver', 'Unscrew Driver2'];



    // this.book = {
    //   'Id': 1,
    //   'Title': 'Some very interesting book about Angular6',
    //   'Authors': ['Screw Driver', 'Unscrew Driver2'],
    //   'AboutAuthors': ['Text about author goes here. TypeOf Array of strings'],
    //   'URL': '//x-studio.com.ua/images/book.jpg',
    //   'Price': 9.99,
    //   'Shipping': 1.99,
    //   'Quantity': 102,
    //   'Annotation': 'Text of Book Annotation goes here. TypeOf string',
    //   'Reviews': [{'Id': 1, 'UserId': 1, 'Text': 'Text of Review # 1 goes here. TypeOf string.', 'Rating': 5},
    //               {'Id': 2, 'UserId': 2, 'Text': 'Text of Review # 2 goes here. TypeOf string.', 'Rating': 2}],
    //   get Rating() {
    //       const object = this.Reviews;
    //       let rating = 0;
    //       let counter = 0;

    //       for (const key in object) {
    //           if (object.hasOwnProperty(key)) {
    //               rating = rating + object[key]['Rating'];
    //               counter++;
    //           }
    //       }
    //       return rating / counter;
    //   },
    //   'BarCode': 'string',
    //   'Type': 1,
    //   'Category': ['Array<string>'],
    //   'Genre': ['Array<string>']
    // };
  }

  ngOnInit() {

    this.getBook();

  }

}

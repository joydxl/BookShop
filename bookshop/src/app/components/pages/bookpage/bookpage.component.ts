import { Component, OnInit } from '@angular/core';
import { Book } from '../../../shared/models/shop-models';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrls: ['./bookpage.component.css']
})
export class BookpageComponent implements OnInit {

  private book = new Book;
  private id: number;

  constructor(/* private */ activatedRoute: ActivatedRoute, /* private  */ dataService: DataService, route_: Router) {
    // this.book = new Book;
    console.log('activateRoute.snapshot.params ID ', activatedRoute.snapshot.params['id']);

      this.id = activatedRoute.snapshot.params['id'];
      activatedRoute.params.subscribe(id => {
        console.log('id', id);
        if (!dataService.bookExist(this.id)) {
          route_.navigate(['']);
        }
        if (this.id) {
          this.book = dataService.getBookData(this.id);
        }
      });

  }

  getBook(id) {


    /* this.book.Price = 10;
    this.book.Title = 'Some interesting book';

    this.book.Reviews = [{'Id': 1, 'UserId': 1, 'Text': 'Text of Review # 1 goes here. TypeOf string.', 'Rating': 5},
                        {'Id': 2, 'UserId': 2, 'Text': 'Text of Review # 2 goes here. TypeOf string.', 'Rating': 2}];

    this.book.Id = this.id;
    this.book.Authors = ['Screw Driver', 'Unscrew Driver2']; */



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
    //this.book = this.dataService.getBookData(this.id);

    

  }

}

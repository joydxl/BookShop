import { Injectable } from '@angular/core';
import { Book, FilteredBooks } from '../models/shop-models';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public Books: Array<FilteredBooks> = [];
  public console = console.log('DataService started');

    getBooks() {
      return this.Books =
      // get filtered array of books and return it


    // Alternative if we may pass not all properties

    /* [
      {'Id': 1, 'Title': 't1', 'URL': '//x-studio.com.ua/images/book.jpg'},
      {'Id': 2, 'Authors': ['a2'], 'URL': '//x-studio.com.ua/images/book.jpg'},
      {'Id': 3, 'Title': 't3', 'Authors': ['a3']}
    ]; */
      [
        {'Id': 1, 'Title': 't1', 'Authors': ['a1'], 'URL': '//x-studio.com.ua/images/book.jpg'},
        {'Id': 2, 'Title': 't2', 'Authors': ['a2'], 'URL': '//x-studio.com.ua/images/book.jpg'},
        {'Id': 3, 'Title': 't3', 'Authors': ['a3'], 'URL': '//x-studio.com.ua/images/book.jpg'}
      ];
    }
    bookExist(id) {
      console.log('id to check: ', id);
      if (id) {
        this.getBooks();
        for (const book in this.Books) {
          if (this.Books.hasOwnProperty(book)) {
            const element = this.Books[book];
            console.log('id of book: ', element.Id);
            if (element.Id.toString() === id) {
              return true;
            }
          }
        }
        return false;
      } else {
        return false;
      }
    }
    getBookData(id: number) {
      const bookData = new Book;
      //  bookData.Id = id;
      let ID: string = id.toString();
      // console.log(bookData.Id);
      switch (ID) {
        case '1': {
          // console.log('bookData.Id', bookData.Id);
          bookData.Id = 1;
          bookData.Title = 'Some very interesting book about Angular6. Chapter1';
          // console.log('bookData.Title', bookData.Title);
          /*bookData.Authors = ['Screw Driver', 'Unscrew Driver2'];
          bookData.AboutAuthors = ['Text about author goes here. TypeOf Array of strings'];
          bookData.URL = '//x-studio.com.ua/images/book.jpg';
          bookData.Price = 9.99;
          bookData.Shipping = 1.99;
          bookData.Quantity = 102;
          bookData.Annotation = 'Text of Book Annotation goes here. TypeOf string';
          bookData.Reviews = [{'Id': 1, 'UserId': 1, 'Text': 'Text of Review # 1 goes here. TypeOf string.', 'Rating': 5},
                      {'Id': 2, 'UserId': 2, 'Text': 'Text of Review # 2 goes here. TypeOf string.', 'Rating': 2}];
          bookData.BarCode = 'string';
          bookData.Type = 1;
          bookData.Category = ['Array<string>'];
          bookData.Genre = ['Array<string>']; */
          //return true;

          break;
        }

        default: {
          // console.log('default of swich');
          // console.log('bookData.Id', bookData.Id);
          // return false;
          break;
        }
      }
      /* Id: 1,
      'Title': 'Some very interesting book about Angular6',
      'Authors': ['Screw Driver', 'Unscrew Driver2'],
      'AboutAuthors': ['Text about author goes here. TypeOf Array of strings'],
      'URL': '//x-studio.com.ua/images/book.jpg',
      'Price': 9.99,
      'Shipping': 1.99,
      'Quantity': 102,
      'Annotation': 'Text of Book Annotation goes here. TypeOf string',
      'Reviews': [{'Id': 1, 'UserId': 1, 'Text': 'Text of Review # 1 goes here. TypeOf string.', 'Rating': 5},
                  {'Id': 2, 'UserId': 2, 'Text': 'Text of Review # 2 goes here. TypeOf string.', 'Rating': 2}],
      'BarCode': 'string',
      'Type': 1,
      'Category': ['Array<string>'],
      'Genre': ['Array<string>']
       */
      console.log('bookData.Id', bookData.Id);
      console.log('bookData.Title', bookData.Title);
      return bookData;
    }

  constructor() { }
}

import { Injectable } from '@angular/core';
import { Book } from '../models/shop-models';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public Books: Array<Book> = [];
  private  returnedBooks = [];
  /* public returnedBooks = [
    {'Id': 1, 'Title': 't1', 'URL': '//x-studio.com.ua/images/book.jpg'},
    {'Id': 2, 'Authors': ['a2'], 'URL': '//x-studio.com.ua/images/book.jpg'},
    {'Id': 3, 'Title': 't3', 'Authors': ['a3']}
  ]; */

  constructor( private _http: HttpClient ) { }

    getBooks() {

      if (this.Books.length === 0) {
        console.log('getBooks() STARTED');
        this._http
          .get('https://iteahubback.azurewebsites.net/api/BookShop/GetAllBooks')
          .subscribe(x => {
            // this.returnedBooks = x;
            this.returnedBooks = [
              {'Id': 1, 'Title': 't1', 'URL': '//x-studio.com.ua/images/book.jpg'},
              {'Id': 2, 'Authors': ['a2'], 'URL': '//x-studio.com.ua/images/book.jpg'},
              {'Id': 3, 'Title': 't3', 'Authors': ['a3']}
            ];
            for (const key in this.returnedBooks) {
              if (this.returnedBooks.hasOwnProperty(key)) {
                this.Books[key] = new Book;
                for (const ikey in this.returnedBooks[key]) {
                  if (this.returnedBooks[key].hasOwnProperty(ikey)) {
                    this.Books[key][ikey] = this.returnedBooks[key][ikey];
                  }
                }
              }
            }
          },
          error => console.error('error bad'));
      }

      return this.Books;
      // get filtered array of books and return it


    // Alternative if we may pass not all properties

    /* [
      {'Id': 1, 'Title': 't1', 'URL': '//x-studio.com.ua/images/book.jpg'},
      {'Id': 2, 'Authors': ['a2'], 'URL': '//x-studio.com.ua/images/book.jpg'},
      {'Id': 3, 'Title': 't3', 'Authors': ['a3']}
    ];
      [
        {'Id': 1, 'Title': 't1', 'Authors': ['a1'], 'URL': '//x-studio.com.ua/images/book.jpg'},
        {'Id': 2, 'Title': 't2', 'Authors': ['a2'], 'URL': '//x-studio.com.ua/images/book.jpg'},
        {'Id': 3, 'Title': 't3', 'Authors': ['a3'], 'URL': '//x-studio.com.ua/images/book.jpg'}
      ]; */
    }
    bookExist(id) {
      if (id) {
        this.getBooks();
        for (const book in this.Books) {
          if (this.Books.hasOwnProperty(book)) {
            const element = this.Books[book];
            if (element.Id === id) {
              return true;
            }
          }
        }
        return false;
      } else {
        return false;
      }
    }
    getBookData(id) {
      // console.log('getBook id ', id, typeof id);
      const bookData = new Book;
      // console.log('bookData ', bookData);
      for (let i = 0; i < this.Books.length; i++) {
        if (this.Books[i]['Id'] === id) {

          for (const key in this.Books[i]) {
            if (this.Books[i].hasOwnProperty(key)) {
              bookData[key] = this.Books[i][key];
            }
          }
        }
      }

      //  bookData.Id = id;
      // let ID: string = id.toString();
      // console.log(bookData.Id);
      /*switch (ID) {
        case '1': {
          // console.log('bookData.Id', bookData.Id);
          bookData.Id = 1;
          bookData.Title = 'Some very interesting book about Angular6. Chapter1';
          // console.log('bookData.Title', bookData.Title);
          bookData.Authors = ['Screw Driver', 'Unscrew Driver2'];
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
          bookData.Genre = ['Array<string>'];
          // return true;

          break;
        }

        default: {
          // console.log('default of swich');
          // console.log('bookData.Id', bookData.Id);
          // return false;
          break;
        }
      }
      // console.log('bookData.Id', bookData.Id);
      // console.log('bookData.Title', bookData.Title);*/
      return bookData;
    }

    addBook(form) {
      return true;
    }

}

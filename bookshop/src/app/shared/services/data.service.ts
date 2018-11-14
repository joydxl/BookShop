import { Injectable } from '@angular/core';
import { Book } from '../models/shop-models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public Books: Array<Book> = [];
  public activeBook = new Book;
  private returnedBooks = [];

  /* public returnedBooks = [
    {'Id': 1, 'Title': 't1', 'URL': '//x-studio.com.ua/images/book.jpg'},
    {'Id': 2, 'Authors': ['a2'], 'URL': '//x-studio.com.ua/images/book.jpg'},
    {'Id': 3, 'Title': 't3', 'Authors': ['a3']}
  ]; */

  constructor( private _http: HttpClient ) {
    this.getBooks();
  }

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
      return this.activeBook = bookData;
    }

    addBook(form) {
      this._http
      .post('https://iteahubback.azurewebsites.net/api/BookShop/CreateNewBook', form)
      .subscribe(x => {
        console.log('result', x);
        const newBook = new Book;
        // for DEVELOPMENT purposes without backend
        if (form) {
          for (const key in form) {
            if (form.hasOwnProperty(key) && form[key]) {
              switch (key) {
                case 'id':
                  newBook.Id = form[key];
                  break;
                case 'title':
                  newBook.Title = form[key];
                  break;
                case 'about':
                  newBook.Annotation = form[key];
                  break;
                case 'urlImg':
                  newBook.URL = form[key];
                  break;
                case 'price':
                  newBook.Price = form[key];
                  break;
                case 'author':
                  newBook.Authors = form[key];
                  break;

                default:
                  break;
              }
            }
          }
          if (!newBook.Id) {
            newBook.Id = this.lastBookId() + 1;
          }
          // end

          this.Books.push(newBook);
          console.log('new this.Books ', this.Books);
          return true;
        }
      },
      error => console.error('error bad'));
      return false;
    }


    lastBookId() {
      if (this.Books.length > 0) {
        const ids: Array<Book['Id']> = [];
        for (const key in this.Books) {
          if (this.Books.hasOwnProperty(key)) {
            ids.push(this.Books[key].Id);
          }
        }
        console.log('ids ', ids);
        let i: number = ids.reduce(function(a, b) {
          return Math.max(a, b);
        });
        return i;
      } else {
        return 0;
      }
    }

}

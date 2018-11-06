import { Injectable } from '@angular/core';
import { Book, FilteredBooks } from '../models/shop-models';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private activeBook: Book['Id'] = null;
  public filteredBooks: Array<FilteredBooks> = [];

    getFilteredBooks() {
      return this.filteredBooks =
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
    getBookData(id) {
      const bookData = new Book;
      bookData.Id = id;
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
      return bookData;
    }

  constructor() { }
}

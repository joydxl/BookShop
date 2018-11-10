
/* export class Manager {
    public Id: number = null;
    public UserName: string = null;
    public Password: string = null;
    public FirstName: string = null;
    public LastName: string = null;
    get FullName() {
        return this.FirstName + ' ' + this.LastName;
    }
    public Books: Array<Book['Id']> = [];
    public Authors: Array<Author['Id']> = [];
} */

export class User {
    public Id: number = null;
    public Role: string = null;
    public UserName: string = null;
    public Password: string = null;
    public FirstName: string = null;
    public LastName: string = null;
    get FullName(): string {
        return this.FirstName + ' ' + this.LastName;
    }
    public Address: Array<string> = [];
    public Card: Array<any> = [];
    public LikedBooks: Array<Book['Id']> = [];
    public Basket: Array<BasketBook> = [];
    public Orders: Array<Order['Id']> = [];
}

export enum TypeOfBook {
    NewBook = 1,
    UsedBook = 2,
    EBook = 3,
    AudioBook = 4
}
export enum UserRole {
    Manager = 1,
    User = 2
}

export class BasketBook {
    public BookId: Book['Id'] = null;
    public Quantity: number = null;
}

export class Review {
    public Id: number = null;
    public UserId: User['Id'] = null;
    public Text: string = null;
    public Rating: number = null;
}

export class OrderItem {
    public BookId: Book['Id'] = null;
    public BookPrice: Book['Price'] = null;
    public Quantity: number = null;
}

export class FilteredBooks {
    public Id: Book['Id'] = null;
    public Title: Book['Title'] = 'Book Title';
    public Authors: Book['Authors'] = ['Author'];
    public URL: Book['URL'] = '//x-studio.com.ua/images/book.jpg';
}

export class Book {

    public Id: number = null;
    public Title: string = 'Book Title';
    public Authors: Array<Author['FullName']> = ['Author'];
    public AboutAuthors: Array<Author['About']> = [];
    public URL: string = '//x-studio.com.ua/images/book.jpg';
    public Price: number = null;
    public Shipping: number = null;
    public Quantity: number = null;
    public Annotation: string = null;
    public Reviews: Array<Review> = []; // {'userId':User.Id, 'review':review}
    public get Rating(): number {

        const object = this.Reviews;

        if (this.Reviews.length === 0) {
          return 0;
        }
        let rating = 0;
        let counter = 0;

        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                rating = rating + object[key]['Rating'];
                counter++;
            }
        }
        return rating / counter;
    }
    public BarCode: string = null;
    public Type: TypeOfBook = null;
    public Category: Array<string> = [];
    public Genre: Array<string> = [];

}

export class Author {
    public Id: number = null;
    public FirstName: string = null;
    public LastName: string = null;
    public get FullName() {
        return this.FirstName + ' ' + this.LastName;
    }
    public About: string;
    public Books: Array<Book['Id']>;
}

export class Order {
    public Id: number = null;
    public Items: Array<OrderItem>;
    public Shipping: number = null;
    public get Price() {
        const object = this.Items;
        let price = 0;

        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                price = price + (object[key]['BookPrice'] * object[key]['Quantity']);
            }
        }
        return price;
    }
    public Paid: boolean = null;
    public Shipped: boolean = null;
}

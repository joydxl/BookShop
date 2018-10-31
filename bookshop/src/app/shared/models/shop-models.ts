
export class Manager {
    public Id: number;
    public UserName: string;
    public Password: string;
    public FirstName: string;
    public LastName: string;
    get FullName() {
        return this.FirstName + ' ' + this.LastName;
    }
    public Books: Array<Book['Id']>;
    public Authors: Array<Author['Id']>;
}

export class User {
    public Id: number;
    public UserName: string;
    public Password: string;
    public FirstName: string;
    public LastName: string;
    get FullName() {
        return this.FirstName + ' ' + this.LastName;
    }
    public Address: Array<string>;
    public Card: Array<any>;
    public LikedBooks: Array<Book['Id']>;
    public Basket: Array<BasketBook>;
    public Orders: Array<Order['Id']>;
}

export enum TypeOfBook {
    NewBook = 1,
    UsedBook = 2,
    EBook = 3,
    AudioBook = 4
}

export class BasketBook {
    public BookId: Book['Id'];
    public Quantity: number;
}

export class Review {
    public Id: number;
    public UserId: User['Id'];
    public Text: string;
    public Rating: number;
}

export class OrderItem {
    public BookId: Book['Id'];
    public BookPrice: Book['Price'];
    public Quantitu: number;
}

export class Book {
    public Id: number;
    public Title: string;
    public Authors: Array<Author['Id']>;
    public Price: number;
    public Shipping: number;
    public Quantity: number;
    public Annotation: string;
    public Reviews: Array<Review>; // {'userId':User.Id, 'review':review}
    public get Rating() {
        const object = this.Reviews;
        let rating = 0;

        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                rating = rating + object[key]['Rating'];
            }
        }
        return rating;
    }
    public BarCode: string;
    public Type: TypeOfBook;
    public Category: Array<string>;
    public Genre: Array<string>;
}

export class Author {
    public Id: number;
    public FirstName: string;
    public LastName: string;
    public get FullName() {
        return this.FirstName + ' ' + this.LastName;
    }
    public Books: Array<Book['Id']>;
}

export class Order {
    public Id: number;
    public Items: Array<OrderItem>;
    public Shipping: number;
    public get Price() {
        const object = this.Items;
        let price = 0;

        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                price = price + (object[key]['BookPrice'] * object[key]['Quantitu']);
            }
        }
        return price;
    }
    public Paid: boolean;
    public Shipped: boolean;
}

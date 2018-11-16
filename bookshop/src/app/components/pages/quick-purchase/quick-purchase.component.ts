import { Component, OnInit } from '@angular/core';
import { Book } from '../../../shared/models/shop-models';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
import { UserService } from 'src/app/shared/services/user.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-quick-purchase',
  templateUrl: './quick-purchase.component.html',
  styleUrls: ['./quick-purchase.component.css']
})
export class QuickPurchaseComponent implements OnInit {

  private book: Book;
  private id: number;

  quickPurchaseForm: FormGroup;

  orderOwner: FormControl;
  listBooks: FormControl;
  quantity: FormControl;
  price: FormControl;

  constructor(activatedRoute: ActivatedRoute, private dataService: DataService, private userService: UserService, router: Router) {

    // console.log('activateRoute.snapshot.params ID ', activatedRoute.snapshot.params['id']);

      this.id = +activatedRoute.snapshot.params['id'];
      console.log('this.id from quick-purchase ', this.id);
      activatedRoute.params.subscribe(id => {
        // console.log('id BookpageComponent', id);
        if (!dataService.bookExist(this.id)) {
          router.navigate(['']);
        }
        if (this.id) {
          console.log('befor getBookData this.id ', this.id, typeof this.id);
          // dataService.getBookData(this.id);
          if (dataService.activeBook.Id) {
            this.book = dataService.activeBook;
          } else {
            dataService.getBookData(this.id);
            this.book = dataService.activeBook;
          }
        }
      });
      if (!this.userService.isLogged()) {
        router.navigate(['login']);
      }

  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.orderOwner = new FormControl();
    this.listBooks = new FormControl();
    this.quantity = new FormControl();
    this.price = new FormControl();
  }

  createForm() {
    this.quickPurchaseForm = new FormGroup({
      orderOwner: this.orderOwner,
      listBooks: this.listBooks,
      quantity: this.quantity,
      price: this.price
    });
  }

  onSubmit() {
    const newOrder = {
      'orderOwner': {
        'id': this.userService.user.Id,
        'loginName': this.userService.user.UserName,
        'password': this.userService.user.Password
      },
      'listBooks': [
        {
          'orderBook': {
            id: this.book.Id,
            title: this.book.Title,
            about: this.book.Annotation,
            urlImg: this.book.URL,
            price: this.book.Price,
            typeOfBook: 1,
            author: this.book.Authors
          },
          quantity: 1,
          price: this.book.Price
        }
      ]
    };
    this.dataService.newOrder(newOrder);

    /* if (this.quickPurchaseForm.addBook(this.addBookForm.value)) {
    this.addBookForm.reset();
    }*/
/*     console.log('this.UserForm.value', this.userForm.value);
    this._http
      .post('https://iteahubback.azurewebsites.net/api/Account/LogIn', this.userForm.value)
      .subscribe(x => {
        console.log('result', x);
      },
      error => console.error('error bad'));
 */  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  addBookForm: FormGroup;

  title: FormControl;
  about: FormControl;
  urlImg: FormControl;
  price: FormControl;
  author: FormControl;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.title = new FormControl();
    this.about = new FormControl();
    this.urlImg = new FormControl();
    this.price = new FormControl();
    this.author = new FormControl();
  }

  createForm() {
    this.addBookForm = new FormGroup({
      title: this.title,
      about: this.about,
      urlImg: this.urlImg,
      price: this.price,
      author: this.author
    });
  }

  onSubmit() {
    if (this.dataService.addBook(this.addBookForm.value)) {
    this.addBookForm.reset();
    }
/*     console.log('this.UserForm.value', this.userForm.value);
    this._http
      .post('https://iteahubback.azurewebsites.net/api/Account/LogIn', this.userForm.value)
      .subscribe(x => {
        console.log('result', x);
      },
      error => console.error('error bad'));
 */  }

}

import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/shared/services/user.service';
import { NavigationService } from 'src/app/shared/services/navigation.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;


  userName: FormControl;
  password: FormControl;
  // roles: FormControl;

  constructor(/*private _http: HttpClient,*/ private userService: UserService, private navigationService: NavigationService ) { }

  /* let userLogged = this.userService.user.id;

  if (userLogged) {
    this.navigationService.goBack();
  }
 */
  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  /* ngOnChanges() {
    if (this.userService.isLogged()) {
      this.navigationService.goBack();
    }
  } */

  createFormControls() {
    this.userName = new FormControl();
    this.password = new FormControl();
    // this.roles = new FormControl();
  }

  createForm() {
    this.userForm = new FormGroup({
      userName: this.userName,
      password: this.password,
      // roles: this.roles,

    });
  }

  onSubmit() {
    this.userService.LogIn(this.userForm.value);
    this.userForm.reset();
/*     console.log('this.UserForm.value', this.userForm.value);
    this._http
      .post('https://iteahubback.azurewebsites.net/api/Account/LogIn', this.userForm.value)
      .subscribe(x => {
        console.log('result', x);
      },
      error => console.error('error bad'));
 */  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  newUserForm: FormGroup;


  loginName: FormControl;
  password: FormControl;
  roles: FormControl;
  private role = 'user';


  constructor(/*private _http: HttpClient,*/  private userService: UserService, private navigationService: NavigationService ) {
    if (userService.isLogged()) {
      this.navigationService.goHome();
    }
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.loginName = new FormControl();
    this.password = new FormControl();
    this.roles = new FormControl();
  }

  createForm() {
    this.newUserForm = new FormGroup({
      loginName: this.loginName,
      password: this.password,
      roles: this.roles,

    });
  }

  onSubmit() {

    this.userService.SingUp(this.newUserForm.value);
    this.newUserForm.value.loginName = '';
    this.newUserForm.value.password = '';

/*     console.log('this.UserForm.value', this.userForm.value);
    this._http
      .post('https://iteahubback.azurewebsites.net/api/Account/LogIn', this.userForm.value)
      .subscribe(x => {
        console.log('result', x);
      },
      error => console.error('error bad'));
 */  }


}

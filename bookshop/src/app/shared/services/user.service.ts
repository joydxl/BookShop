import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/shop-models';
import { NavigationService } from './navigation.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user = new User;

  constructor(private _http: HttpClient, private navigationService: NavigationService) { }

  LogIn(form) {
    console.log('this.UserForm.value', form);
    this._http
      .post('https://iteahubback.azurewebsites.net/api/Account/LogIn', form)
      .subscribe(x => {
        console.log('result', x);
        for (const key in x) {
          if (x.hasOwnProperty(key)) {
            switch (key) {
              case 'id':
                this.user.Id = x[key];
                break;
              case 'loginName':
                this.user.UserName = x[key];
                break;
              case 'roles':
                this.user.Role = x[key];
                break;

              default:
                break;
            }
          }
        }
        console.log('this.user: ', this.user);
        if (this.user.Role === 'manager') {

        }
        this.navigationService.goBack();
      },
      error => console.error('error bad'));
  }
  LogOut() {
    if (this.user.Role === 'manager') {
      this.navigationService.goManager('manager');
    }
    this.user = new User;
    console.log('this.user: ', this.user);
  }

  isLogged() {
    console.log('isLogged started');
    if (this.user.Id) {
      return true;
    } else {
      return false;
    }
  }
  isManager() {
    console.log('isManager started');
    if (this.user.Role === 'manager') {
      return true;
    } else {
      return false;
    }
  }
}
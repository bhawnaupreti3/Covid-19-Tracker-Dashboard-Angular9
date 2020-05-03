import { Injectable } from '@angular/core';
import { IAdmin } from '../Model/Admin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginData: IAdmin[];
  constructor() {
    this.getUsers();
  }

  /** Method to get all login user data. */
  getUsers(): IAdmin[] {
    this.loginData = [{
      
      "username": "admin",
      "password": "admin"
    }];
    return this.loginData;
  }

  /** Method that validates login credentials passed by user. */
  validateUser(user: IAdmin): boolean {
    let validUser = false;
    if (this.loginData.findIndex(usr => user.username.toLowerCase() === usr.username.toLowerCase()) > -1) {
      validUser = true;
    }
    return validUser;
  }
}
import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Account} from "../interfaces/login.interface";
import {accounts} from "../const/login.const";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userIsLogin: string|null = null;
  constructor() {}

  mockLogin(user: Account): Observable<string|null> {
    if (accounts.find(acc => acc.login === user.login && acc.password === user.password)) {
      this.userIsLogin = user.login;
      return of(user.login);
    } else {
      return of(null);
    }
  }
}

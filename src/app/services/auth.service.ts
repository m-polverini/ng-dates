import { Injectable } from '@angular/core';
import { Login } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  static isAuthenticated() {
    return localStorage.getItem('_user') ? true : false;
  }

  static login(login: Login) {
    localStorage.setItem('_user', JSON.stringify(login));
  }
}

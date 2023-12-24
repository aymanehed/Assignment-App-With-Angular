import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users = [
    { login: 'admin', password: 'admin', role: 'admin' },
    { login: 'user', password: 'user', role: 'user' }
  ];

  constructor() { }

  loggedIn = false;

  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.loggedIn = false;
  }

  isAdmin(): boolean {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.role === 'admin') {
      return true;
    }
    return false;
  }

  isUser(): boolean{
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.role === 'user') {
      return true;
    }
    return false;
  }

  login(login: string, password: string): boolean {
    const foundUser = this.users.find(user => user.login === login && user.password === password);
    if (foundUser) {
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      return true;
    }
    return false;
  }

  isLogged(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }
  
  getUser(): any {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}

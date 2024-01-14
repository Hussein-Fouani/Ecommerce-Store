import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  isLoggedin(): import('../_auth/auth.guard').AuthGuard {
    throw new Error('Method not implemented.');
  }
  constructor() {}

  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }
  public getRoles(): [] {
    return JSON.parse(localStorage.getItem('roles') as string);
  }
  public setToken(jwttoken: string) {
    localStorage.setItem('jwttoken', jwttoken);
  }
  public getToken(): string {
    return localStorage.getItem('jwttoken') as string;
  }
  public clear() {
    localStorage.clear();
  }
  public isAuthenticated() {
    return this.getRoles() && this.getToken();
  }
}

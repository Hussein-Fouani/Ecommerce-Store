import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor() {}

  public setRoles(roles: []) {
    localStorage.setItem('role', JSON.stringify(roles));
  }
  public getRoles(): [] {
    return JSON.parse(localStorage.getItem('role') as string);
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
  public isAdmin() {
    const rols: any[] = this.getRoles();
    return rols[0].role === 'ADMIN';
  }
  public isUser() {
    const rols: any[] = this.getRoles();
    return rols[0].role === 'USER';
  }
}


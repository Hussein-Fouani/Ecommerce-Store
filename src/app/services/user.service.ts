import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url_base: string = 'http://localhost:9090/api/v1/auth';
  requestheader = new HttpHeaders({
    'No-Auth': 'True',
  });
  constructor(
    private httpclient: HttpClient,
    private userservice: UserAuthService
  ) {}

  public login(loginData: String) {
    return this.httpclient.post(this.url_base + '/signin', loginData, {
      headers: this.requestheader,
    });
  }
  public forUser() {
    return this.httpclient.get(this.url_base + '/api/v1/user', {
      responseType: 'text',
    });
  }
  public forAdmin() {
    return this.httpclient.get(this.url_base + '/api/v1/admin', {
      responseType: 'text',
    });
  }
  public roleMatch(allowedroles: any): boolean {
    let isMatched = false;
    const userRoles: any = this.userservice.getRoles();
    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedroles.length; j++) {
          if (userRoles[i].role == allowedroles[j]) {
            isMatched = true;
            return isMatched;
          }
        }
      }
    }
    return (isMatched = false);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url_base: string = '/api/v1/auth';
  requestheader = new HttpHeaders({
    "No-Auth":"True"
  });
  constructor(private httpclient: HttpClient) {}
  public login(loginData: String) {
    return this.httpclient.post(this.url_base + '/signin', loginData,{headers:this.requestheader});
  }
}

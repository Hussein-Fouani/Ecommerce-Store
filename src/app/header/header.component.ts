import { Component } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(
    private userSerivce: UserAuthService,
    private router: Router,
    protected userauth: UserService
  ) {}
  public isloggedIn() {
    return this.userSerivce.isAuthenticated();
  }
  public Logout() {
    this.userSerivce.clear();
    this.router.navigate(['/home']);
  }
  public isAdmin() {
    return this.userSerivce.isAdmin();
  }
  public isUser() {
    return this.userSerivce.isUser();
  }
}

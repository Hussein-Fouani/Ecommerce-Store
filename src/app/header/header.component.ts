import { Component } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private userSerivce:UserAuthService,private router:Router){

  }
  public isloggedIn(){
    return this.userSerivce.isAuthenticated();
  }
  public Logout(){
    this.userSerivce.clear();
    this.router.navigate(['/home']);
  }

}

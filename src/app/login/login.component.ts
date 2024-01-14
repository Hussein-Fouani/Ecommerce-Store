import { UserAuthService } from './../services/user-auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private userservice:UserService,private  userauthservice:UserAuthService,private router:Router ) {

  }
  login(loginForm: NgForm) {
    this.userservice.login(loginForm.value).subscribe((response :any)=>{
      this.userauthservice.setRoles(response.user.role);
      this.userauthservice.setToken(response.user.token);
      const roles = response.user.role[0].role;
      if (roles === 'ADMIN') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/user  ']);
      }
    },(error)=>{
      console.log(error);
    });
  }
}

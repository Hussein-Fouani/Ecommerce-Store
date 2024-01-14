import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  message: any;
  constructor(private userservice: UserService) {}
  ngOnInit(): void {
    this.forUsers();
  }
  forUsers() {
    this.userservice.forUser().subscribe((subs) => {
      this.message = subs;
    });
  }
}

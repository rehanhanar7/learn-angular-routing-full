import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { user } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'user',
  template: `<h1>I am {{currentuser.name}} {{currentuser.id}} Component</h1>`,
  styles: [],
})
export class UserComponent implements OnInit, DoCheck {
  currentuser: user = { id: 0, name: 'User' };

  constructor(private userService: UserService) {}

  ngOnInit() {}

  ngDoCheck() {
    this.currentuser = this.userService.getuser();
  }
}

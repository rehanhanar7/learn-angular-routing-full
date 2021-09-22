import { Injectable } from '@angular/core';
import { user } from '../models/user.model';

@Injectable()
export class UserService {
  users: user[] = [
    { id: 1, name: 'Rehan' },
    { id: 2, name: 'Hanar' },
    { id: 3, name: 'Asik (I will not be shown)' },
  ];

  currentuser: user;

  setuser(user) {
    this.currentuser = user;
  }

  getuser() {
    return this.currentuser;
  }

  fetchusers(): Promise<user[]> {
    return new Promise((resolve, reject) => {
      return setTimeout(() => resolve(this.users), 1500);
    });
  }
}

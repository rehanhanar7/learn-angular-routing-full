import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { user } from '../models/user.model';
import { UserService } from './user.service';

@Injectable()
export class UsersApiResolver implements Resolve<user[]> {
  constructor(private userService: UserService) {}

  resolve(): user[] | Observable<user[]> | Promise<user[]> {
    return this.userService.fetchusers();
  }
}

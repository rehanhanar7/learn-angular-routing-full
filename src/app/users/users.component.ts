import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { user } from '../models/user.model';
import { CanComponentDeactivate } from '../services/candeactivate.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'users',
  template: `<h1>I am Users Component</h1>
             <div *ngIf="users.length == 0; else loadedcomponent">Loading...</div>
             <ng-template #loadedcomponent>
              <div *ngFor="let user of users">
              User : 
              <!-- <a [routerLink]="['user/'+user.id]" routerLinkActive="activeclass">{{user.name}}</a> -->
              <button (click)="OpenUserComponentwithData(user)">{{user.name}}</button>
              </div>
             </ng-template>
             <router-outlet></router-outlet>
             <br>
             <button (click)="isCanDeactivateEnabled = !isCanDeactivateEnabled">Can Navigate to Other Routes ? ({{isCanDeactivateEnabled ? 'Yes':'No'}})</button>`,
  styles: [
    `.activeclass{
      color: green;
      padding: 1vw;
      background-color: whitesmoke;
    }
  `,
  ],
})
export class UsersComponent implements OnInit, CanComponentDeactivate, DoCheck {
  isCanDeactivateEnabled: boolean = false;

  ngDoCheck() {
    // console.log(this.isCanDeactivateEnabled);
  }

  CanDeactivated() {
    return !this.isCanDeactivateEnabled
      ? confirm('Changes are not saved, Do you want to proceed ?')
      : this.isCanDeactivateEnabled;
  }

  users: user[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  /**
   * Data loading is moved to resolver
   */
  ngOnInit() {
    this.activatedRoute.data.subscribe((data: any) => {
      // this.users = data;
      this.users = data.userdata;
    });
    // this.userService.fetchusers().then((res: user[]) => (this.users = res));
  }

  /**
   * Send single user to the user.component
   */
  OpenUserComponentwithData = (user: user) => {
    this.router.navigate(['./user/', user.id], {
      relativeTo: this.activatedRoute,
    });
    this.userService.setuser(user);
  };
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { CanUserAccessThisPage } from './services/canactivate.service';
import { CanUserAllowToDeactivate } from './services/candeactivate.service';
import { UsersApiResolver } from './services/resolver.service';
import { DepartmentComponent } from './department/department.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivateChild: [CanUserAccessThisPage],
    canDeactivate: [CanUserAllowToDeactivate],
    resolve: { userdata: UsersApiResolver },
    children: [
      {
        path: 'user/:id',
        component: UserComponent,
      },
    ],
  },
  {
    path: 'department',
    component: DepartmentComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { DepartmentComponent } from './department/department.component';

import { NotFoundComponent } from './notfound/notfound.component';
import { UserService } from './services/user.service';

import { CanUserAccessThisPage } from './services/canactivate.service';
import { CanUserAllowToDeactivate } from './services/candeactivate.service';

import { UsersApiResolver } from './services/resolver.service';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    UserComponent,
    HomeComponent,
    UsersComponent,
    NotFoundComponent,
    DepartmentComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    UserService,
    CanUserAccessThisPage,
    CanUserAllowToDeactivate,
    UsersApiResolver,
  ],
})
export class AppModule {}

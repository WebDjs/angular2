import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {
  HeaderComponent,
  NavMenuComponent,
  HomeComponent,
  AppRoutingModule,
  AlertComponent
} from './common';
import { ItemsComponent, FeaturedItemComponent } from './items';
import { OtherItemsComponent, FeaturedOtherItemComponent } from './other-items';
import { LoginComponent, RegisterComponent } from './login/';
import { LogComponent } from './logs/log.component';
import {
  AlertService,
  AuthenticationService,
  UsersService,
  LogsService
} from './common/services/';
import { MDLUpgradeElementDirective } from './common/directives/';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavMenuComponent,
    ItemsComponent,
    LogComponent,
    FeaturedItemComponent,
    OtherItemsComponent,
    FeaturedOtherItemComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MDLUpgradeElementDirective,
    AlertComponent,
    UserComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AlertService,
    AuthenticationService,
    UsersService,
    LogsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

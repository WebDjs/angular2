import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent, NavMenuComponent, HomeComponent, AppRoutingModule } from './common';
import { ItemsComponent, FeaturedItemComponent } from './items';
import { OtherItemsComponent, FeaturedOtherItemComponent } from './other-items';
import { LoginComponent, RegisterComponent } from './login/';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavMenuComponent,
    ItemsComponent,
    FeaturedItemComponent,
    OtherItemsComponent,
    FeaturedOtherItemComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

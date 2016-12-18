import { Component, OnInit, DoCheck } from '@angular/core';
import { MDLUpgradeElementDirective } from './common/directives/';
import { AlertComponent } from './common/';
import { UsersService } from './common/services';
import { User } from './common/models/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'Site title';
  currentUser: User;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.currentUser = this.usersService.loggedUser();
  }

  ngDoCheck() {
    this.currentUser = this.usersService.loggedUser();
  }
}

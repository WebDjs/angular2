import { Component, OnInit } from '@angular/core';
import { UserEditComponent } from './user-edit.component'
import { DataService } from 'app/common/services/data.service';
import { User } from 'app/common/models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userData: User;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    // TODO: extract this in user something
    this.userData = JSON.parse(localStorage.getItem('currentUser')).user;
  }
}

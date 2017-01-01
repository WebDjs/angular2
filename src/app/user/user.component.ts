import { Component, OnInit } from '@angular/core';
import { UserEditComponent } from './user-edit.component';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'app/common/services/data.service';
import { User } from 'app/common/models';
import { Subscription } from 'rxjs/Subscription';

export type UserState = "read" | "create" | "update";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userData: User;
  state: UserState = "read";
  sub: Subscription;

  constructor(private _dataService: DataService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getUser("1");
    // this.sub = this._route.params.subscribe(
    //   params => {
    //     let id = params['id'];
    //     this.getUser(id);
    //   });
  }

  getUser(id: string) {
     this._dataService.getUserById(id).subscribe(
      userData => this.userData = userData);

    // this._dataService.getUserById(id).subscribe(function(userData) {
    //       console.log(userData);
    //       this.userData = userData;
    // });
  }

  submit(userData: User, isValid: boolean) {
    if(isValid) {
      //this._dataService.updateUser(userData)
      this.state = "read";
    }
  }

  update() { this.state = "update"; }
  cancel() { this.state = "read"; }
  create() { this.state = "create"; }

  checkState(curState: UserState) {
    return this.state === curState;
  }
}

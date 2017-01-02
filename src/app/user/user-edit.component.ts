import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { User } from 'app/common/models';
import { UsersService } from 'app/common/services/users.service';
import { UserState } from 'app/common/user-state.event';
import { Http, Headers, Response } from '@angular/http';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {

  @Input() userData: User;
  @Output() stateChange: EventEmitter<UserState> = new EventEmitter<UserState>();

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _usersService: UsersService) {
  }

  submit(userData: User, isValid: boolean) {
    if (isValid) {
      this._usersService.update(userData).subscribe((response: Response) => {
        this.stateChange.emit("read");
      });

    }
  }

  cancel() {
    this.stateChange.emit("read");
  }
}
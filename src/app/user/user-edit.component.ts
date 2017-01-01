import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { User } from 'app/common/models';
import { DataService } from 'app/common/services/data.service';
import { UserState } from 'app/common/user-state.event';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
 
   @Input() userData: User;
   @Output() stateChange: EventEmitter<UserState> = new EventEmitter<UserState>();

  // private sub: Subscription;
  // constructor(private _route: ActivatedRoute,
  //   private _router: Router,
  //   private _dataService: DataService) {
  // }

  // ngOnInit() {
  //   this.sub = this._route.params.subscribe(
  //     params => {
  //       let id = params['id'];
  //       this.getUser(id);
  //     });
  // }

  // getUser(id: string) {    
  //  this._dataService.getUserById("1").subscribe(
  //     userData => this.userData = userData);
  // }

  submit(userData: User, isValid: boolean) {
    if(isValid) {
      //this._dataService.updateUser(userData)
      this.stateChange.emit("read");
    }
  }

  cancel() {
    this.stateChange.emit("read");
  }
}
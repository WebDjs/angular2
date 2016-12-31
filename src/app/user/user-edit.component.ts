import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { User } from 'app/common/models';
import { DataService } from 'app/common/services/data.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userData: User;

  private sub: Subscription;
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _dataService: DataService) {
  }


  ngOnInit() {
    this.sub = this._route.params.subscribe(
      params => {
        let id = +params['id'];
        this.getUser(id);
      });
  }

  getUser(id: number) {
        this._dataService.getUserById(id).subscribe(
        userData => this.userData = userData);
    }

  submit() {
    console.log("implement logic for submit")
  }

}

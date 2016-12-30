import { Component, OnInit, Input } from '@angular/core';
import { UserComponent } from './user.component'

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      
  }

  submit() {
      console.log("implement logic for submit")
  }

}

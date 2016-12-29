import { Component, OnInit, Input } from '@angular/core';
import { UserComponent } from './user.component'

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

private userData: any = { userName: "TestUser", firstName: "John", lastName: "Doe", description: "this is my description", image: "http://www.utiladivecenter.com/sites/center.udc/files/master_diver.jpg" }

  constructor() { }

  ngOnInit() {
      
  }

  submit() {
      console.log("implement logic for submit")
  }

}

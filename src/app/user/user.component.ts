import { Component, OnInit } from '@angular/core';
import { UserEditComponent } from './user-edit.component'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

  constructor() { }
  private userData: any = { userName: "TestUser", firstName: "John", lastName: "Doe", description: "this is my description", image: "http://www.utiladivecenter.com/sites/center.udc/files/master_diver.jpg" }

  ngOnInit() {

  }

}

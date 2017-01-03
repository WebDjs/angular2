import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-add-dive',
  templateUrl: './user-add-dive.component.html',
  styleUrls: ['./user-add-dive.component.css']
})
export class UserAddDiveComponent implements OnInit {

newDive: any;
  constructor() { }

  ngOnInit() {
        this.newDive = {
      site: '',
      depth: 0,
      time: 0,
      sightings: [],
      divedBy: 'testUser'
    };
  }

}

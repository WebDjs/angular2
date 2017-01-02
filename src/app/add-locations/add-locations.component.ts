import { Component, OnInit } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add-locations',
  templateUrl: './add-locations.component.html',
  styleUrls: ['./add-locations.component.css']
})
export class AddLocationsComponent implements OnInit {

  newLocation: any = {
    name: 'test',
    latitude: '',
    longitude: '',
    imageUrls: [],
    sites: [
      {
        name: '',
      }

    ]
  };
  constructor() { }

  ngOnInit() {
  }

  submit(name: string, latitude: number, longitude: number, imageUrls: string, siteName: string) {
    this.newLocation.name = name;
    this.newLocation.latitude = latitude;
    this.newLocation.longitude = longitude;
    this.newLocation.imageUrls.push(imageUrls);
    this.newLocation.sites[0].name = siteName;

    console.log(this.newLocation);
  }

}
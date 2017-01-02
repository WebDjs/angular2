import { Component, OnInit } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-add-locations',
  templateUrl: './add-locations.component.html',
  styleUrls: ['./add-locations.component.css']
})
export class AddLocationsComponent implements OnInit {

  private _locationsUrl = 'http://localhost:3000/api/locations/create';
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
  constructor(private _http: Http) { }

  ngOnInit() {
  }

addLocations (newLocation: any) {

    let headers = new Headers(),
            token = this.getToken();

        headers.append('Content-Type', 'application/json');
        headers.append('authorization', token);

        return this._http.post(this._locationsUrl,JSON.stringify(newLocation),
            { headers: headers }).map(response => response.json()).subscribe(responce => console.log(responce))
  }

  submit(name: string, latitude: number, longitude: number, imageUrls: string, siteName: string) {
    this.newLocation.name = name;
    this.newLocation.latitude = latitude;
    this.newLocation.longitude = longitude;
    this.newLocation.imageUrls.push(imageUrls);
    this.newLocation.sites[0].name = siteName;

    console.log(this.newLocation);
    this.addLocations(this.newLocation);

  }

  getToken(): string {
        let storedUser = localStorage.getItem('currentUser');
        return storedUser ? JSON.parse(storedUser).token : null;
    }

  

}
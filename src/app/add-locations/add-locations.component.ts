import { Component, OnInit } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Location } from 'app/common/models';

@Component({
  selector: 'app-add-locations',
  templateUrl: './add-locations.component.html',
  styleUrls: ['./add-locations.component.css']
})
export class AddLocationsComponent implements OnInit {

  private _locationsUrl = 'http://localhost:3000/api/locations/create';

  newLocation: Location;
  siteName: string;

  constructor(private _http: Http) { }

  ngOnInit() {
    this.newLocation = {
      name: '',
      latitude: -8.690899,
      longitude: 115.433580,
      imageUrls: [],
      sites: []
    };
  }

  addLocations(newLocation: Location) {
    let headers = new Headers(),
      token = this.getToken();

    headers.append('Content-Type', 'application/json');
    headers.append('authorization', token);

    return this._http.post(this._locationsUrl,
         JSON.stringify(newLocation),
         { headers: headers })
        .map(response => response.json())
        .subscribe(response => console.log(response))
  }

  submit() {
    this.newLocation.sites.push({ name: this.siteName });
    this.addLocations(this.newLocation);
  }

  mapClicked($event) {
    this.newLocation.latitude = $event.coords.lat;
    this.newLocation.longitude = $event.coords.lng;
  }

  getToken(): string {
    let storedUser = localStorage.getItem('currentUser');
    return storedUser ? JSON.parse(storedUser).token : null;
  }
}
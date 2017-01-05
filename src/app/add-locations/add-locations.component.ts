import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Location } from 'app/common/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-locations',
  templateUrl: './add-locations.component.html',
  styleUrls: ['./add-locations.component.css']
})
export class AddLocationsComponent implements OnInit {
  // TODO: use service of some sort
  private _locationsUrl = '/api/locations/create';
  private newLocation: Location;
  private siteName: string;

  @ViewChild('locationPhotos') locationPhotos: ElementRef;
  private locationImageCount = [1];

  addLocationImageInput() {
    let ind = this.locationImageCount[this.locationImageCount.length - 1];
    this.locationImageCount.push(ind + 1);
  }

  constructor(private _http: Http, private router: Router,) { }

  ngOnInit() {
    this.newLocation = {
      name: '',
      latitude: -8.690899,
      longitude: 115.433580,
      imageUrls: [],
      sites: [],
      logs: []
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
        .subscribe(response =>  this.router.navigate(['/locations']));
        // TODO: change to location detail
  }

  submit() {
    this.locationPhotos.nativeElement
        .querySelectorAll('.imageUrl')
        .forEach(image => {
          this.newLocation.imageUrls.push(image.value);
        });

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
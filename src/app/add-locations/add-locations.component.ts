import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Location } from 'app/common/models';
import { Router } from '@angular/router';
import { LocationService } from 'app/common/services';

@Component({
  selector: 'app-add-locations',
  templateUrl: './add-locations.component.html',
  styleUrls: ['./add-locations.component.css']
})
export class AddLocationsComponent implements OnInit {
  private newLocation: Location;
  private siteName: string;
  private hasImage: boolean;

  constructor(private _http: Http,
    private router: Router,
    private locationService: LocationService) { }

  @ViewChild('locationPhotos') locationPhotos: ElementRef;
  private locationImageCount = [1];

  addLocationImageInput() {
    //this.hasImage = false;
    let ind = this.locationImageCount[this.locationImageCount.length - 1];
    this.locationImageCount.push(ind + 1);
  }

  // onImageUrlChange($event) {
  //   this.hasImage = $event.currentTarget.value ? true : false;
  // }

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

  submit() {
    this.locationPhotos.nativeElement
      .querySelectorAll('.imageUrl')
      .forEach(image => {
        this.newLocation.imageUrls.push(image.value);
      });

    this.newLocation.sites.push({ name: this.siteName });
    this.locationService.createLocation(this.newLocation)
      .subscribe(response => this.router.navigate(['/locations/details/' + response.location._id]));;

  }

  mapClicked($event) {
    this.newLocation.latitude = $event.coords.lat;
    this.newLocation.longitude = $event.coords.lng;
  }
}
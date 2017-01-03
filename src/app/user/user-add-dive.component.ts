import { Component, OnInit } from '@angular/core';
import { DataService, UsersService } from 'app/common/services';
import { Log, Location, User, Site } from 'app/common/models';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add-dive',
  templateUrl: './user-add-dive.component.html',
  styleUrls: ['./user-add-dive.component.css']
})
export class UserAddDiveComponent implements OnInit {
  newDive: Log = {
    site: '',
    location: '',
    depth: 0,
    time: 0,
    sightings: []
  };

  locations: Array<Location>;
  selectedLocation: Location;
  user: User;
  sightings: Array<string>;
  newSite: Site;
  addSighting: string;
  mapZoom: number;

  onLocationClick(ev: any) {
    let id: string = ev.target.id;
    this.selectedLocation = this.locations.find(l => l._id === id);

    this.newDive.location = this.selectedLocation.name;
  }

  onSelectionChange(id) {
    this.selectedLocation = this.locations.find(l => l._id === id);

    this.newDive.location = this.selectedLocation.name;
  }

  constructor(
    private _usersService: UsersService,
    private _dataService: DataService,
    private router: Router) { }

  ngOnInit() {
    this.newSite =  { latitude: 0, longitude: 0, name: '' };
    this.sightings = [];
    this.user = this._usersService.loggedUser();
    this.mapZoom = 12;
    this._dataService.getAllLocations()
      .subscribe(response => {
      this.locations = response.data;
      this.locations = this.locations.filter(l => !!l.name.length);
    });
  }

  markerDragEnd($event) {
    this.newSite.latitude = $event.coords.lat;
    this.newSite.longitude = $event.coords.lng;
  }

  submit() {
    let sightingsToAdd = this.addSighting.split(',');
    this.newSite.name = this.newDive.site;
    this.newSite.sightings = sightingsToAdd;
    this.updateLocation(this.newSite, this.newDive);
    this.addDive(this.newDive);
  }

  addDive(dive) {
    let user = this._usersService.loggedUser();
    user.logs.push(dive);
    this._usersService.update(user).subscribe((response: Response) => {
        this.router.navigate(['/logs'])
    });
  }

  updateLocation(site, log){
    this.selectedLocation.sites.push(site);
    this.selectedLocation.logs.push(log);
    console.log(this.selectedLocation)
    this._dataService.updateLocation(this.selectedLocation)
        .subscribe((response: Response) => {
        console.log('updateLocation', response);
    });
  }
}

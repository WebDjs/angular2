import { Component, OnInit } from '@angular/core';
import { LocationService, UsersService } from 'app/common/services';
import { Log, Location, User, Site } from 'app/common/models';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add-dive',
  templateUrl: './user-add-dive.component.html',
  styleUrls: ['./user-add-dive.component.css']
})
export class UserAddDiveComponent implements OnInit {

  public newDive: Log = {
    site: '',
    location: '',
    depth: 0,
    time: 0,
    sightings: []
  };

  public locations: Array<Location>;
  public selectedLocation: Location;
  public user: User;
  public sightings: Array<string>;
  public newSite: Site;
  public addSighting: string;
  public mapZoom: number;

  constructor(
    private usersService: UsersService,
    private locationService: LocationService,
    private router: Router) { }

  ngOnInit() {
    this.newSite = { latitude: 0, longitude: 0, name: '' };
    this.sightings = [];
    this.user = this.usersService.loggedUser();
    this.mapZoom = 12;
    this.locationService.getAllLocations()
      .subscribe(response => {
        this.locations = response.data;
        this.locations = this.locations.filter(l => !!l.name.length);
      });
  }

  onLocationClick(ev: any) {
    let id: string = ev.target.id;
    this.selectedLocation = this.locations.find(l => l._id === id);
    this.newDive.location = this.selectedLocation.name;
  }

  onSelectionChange(id) {
    this.selectedLocation = this.locations.find(l => l._id === id);
    this.newDive.location = this.selectedLocation.name;
  }

  markerDragEnd($event) {
    this.newSite.latitude = $event.coords.lat;
    this.newSite.longitude = $event.coords.lng;
  }

  submit() {
    let sightingsToAdd = this.addSighting.split(',');
    this.newSite.name = this.newDive.site;
    this.newSite.sightings = sightingsToAdd;
    this.selectedLocation.sites.push(this.newSite);
    this.selectedLocation.logs.push(this.newDive);
    this.locationService.updateLocation(this.selectedLocation)
      .subscribe(response => this.addDive(this.newDive));
  }

  addDive(dive) {
    let user = this.usersService.loggedUser();
    user.logs.push(dive);
    this.usersService.update(user).subscribe((response: Response) => {
      this.router.navigate(['/logs'])
    });
  }
}
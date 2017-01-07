import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { LocationService } from 'app/common/services';
import 'rxjs/add/operator/map';
import { Log, Location } from 'app/common/models';

@Component({
    templateUrl: './app-logs.template.html'
})
export class AppLogsComponent implements OnInit {
    logs: Log[];
    locations: Location[];

    constructor(private locationService: LocationService) {
    }

    ngOnInit(): void {
        this.logs = [];
        this.locations = [];
        this.locationService.getAllLocations().subscribe(response => {
                this.locations = response.data;
                this.locations.filter(l => !!l.name.length);
                this.locations.forEach(l => this.logs.push(...l.logs));
            });
    }
}
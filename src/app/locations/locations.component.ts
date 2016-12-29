import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { LogsService } from 'app/common/services/logs.service';
import 'rxjs/add/operator/map';
import { ILocation } from 'app/common/models';

@Component({
    templateUrl: 'app/locations/locations.template.html'
})
export class LocationComponent implements OnInit {
    locations: ILocation[];
    errorMessage: string;

    constructor(private _diveLogsService: LogsService) {
    }

    ngOnInit(): void {
        this._diveLogsService.getAllLocations()
            .subscribe(locations => this.locations = locations,
            error => this.errorMessage = <any>error);
    }
}
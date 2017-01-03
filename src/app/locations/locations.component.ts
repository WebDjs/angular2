import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataService } from 'app/common/services/data.service';
import 'rxjs/add/operator/map';

@Component({
    templateUrl: 'app/locations/locations.template.html',
    styleUrls: ['./locations.component.css']
})
export class LocationComponent implements OnInit {
    locations: any[];
    errorMessage: string;

    constructor(private _diveLogsService: DataService) {
    }

    ngOnInit(): void {
        this._diveLogsService.getAllLocations()
            .subscribe(responce => this.locations = responce.data,
            error => this.errorMessage = <any>error);
    }

    
}